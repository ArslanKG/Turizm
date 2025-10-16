const { createServer } = require('http');
const next = require('next');
const { parse } = require('url');
const path = require('path');
const os = require('os');

// Environment configuration
const dev = process.env.NODE_ENV !== 'production';
const hostname = process.env.HOSTNAME || (os.platform() === 'win32' ? 'localhost' : '0.0.0.0');
const port = parseInt(process.env.PORT) || 3000;

// Windows-specific optimizations
if (os.platform() === 'win32') {
  // Increase UV_THREADPOOL_SIZE for better I/O performance on Windows
  process.env.UV_THREADPOOL_SIZE = process.env.UV_THREADPOOL_SIZE || '16';
}

// Next.js app configuration
const app = next({ dev, hostname, port });
let handle = app.getRequestHandler();

// IIS Health Check endpoint
if (!dev) {
  const originalHandle = handle;
  handle = async (req, res, parsedUrl) => {
    // Health check for IIS Application Initialization
    if (req.url === '/health' || req.url === '/ping') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        environment: process.env.NODE_ENV
      }));
      return;
    }
    
    return originalHandle(req, res, parsedUrl);
  };
}

// Server startup
async function startServer() {
  try {
    const platform = os.platform();
    console.log(`🚀 Starting Next.js server in ${dev ? 'development' : 'production'} mode on ${platform}...`);
    
    if (platform === 'win32') {
      console.log(`💻 Windows optimizations enabled - UV_THREADPOOL_SIZE: ${process.env.UV_THREADPOOL_SIZE}`);
    }
    
    // Prepare Next.js app
    await app.prepare();
    console.log('✅ Next.js app prepared successfully');

    // Create HTTP server
    const server = createServer(async (req, res) => {
      try {
        const parsedUrl = parse(req.url, true);
        
        // Security headers for production
        if (!dev) {
          res.setHeader('X-Content-Type-Options', 'nosniff');
          res.setHeader('X-Frame-Options', 'DENY');
          res.setHeader('X-XSS-Protection', '1; mode=block');
        }

        await handle(req, res, parsedUrl);
        
      } catch (error) {
        console.error('Request error:', error);
        if (!res.headersSent) {
          res.statusCode = 500;
          res.end('Internal Server Error');
        }
      }
    });

    // Handle server errors with Windows-specific messages
    server.on('error', (error) => {
      if (error.code === 'EADDRINUSE') {
        console.error(`❌ Port ${port} is already in use`);
        if (os.platform() === 'win32') {
          console.error(`💡 Windows: Use 'netstat -ano | findstr :${port}' to find the process using this port`);
          console.error(`💡 Windows: Use 'taskkill /PID <PID> /F' to kill the process`);
        }
        process.exit(1);
      } else if (error.code === 'EACCES') {
        console.error(`❌ Permission denied on port ${port}`);
        if (os.platform() === 'win32') {
          console.error(`💡 Windows: Try running as Administrator or use a different port`);
        }
        process.exit(1);
      } else {
        console.error('❌ Server error:', error);
        process.exit(1);
      }
    });

    // Start server
    server.listen(port, hostname, () => {
      console.log(`🌍 Server running at: http://${hostname}:${port}`);
      console.log(`📁 Working directory: ${process.cwd()}`);
      if (os.platform() === 'win32') {
        console.log(`💻 Windows process PID: ${process.pid}`);
      }
    });

    // Graceful shutdown for IIS compatibility
    process.on('SIGTERM', () => {
      console.log('🛑 SIGTERM received, shutting down gracefully');
      server.close(() => {
        console.log('✅ Server closed');
        process.exit(0);
      });
    });

    process.on('SIGINT', () => {
      console.log('🛑 SIGINT received, shutting down gracefully');
      server.close(() => {
        console.log('✅ Server closed');
        process.exit(0);
      });
    });

    return server;
    
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
}

// Start the server
if (require.main === module) {
  startServer();
}

module.exports = { app, startServer };