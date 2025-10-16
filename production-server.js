// Simplified Next.js Production Server for IIS
const http = require('http');
const next = require('next');
const path = require('path');
const fs = require('fs');

// Environment setup
const dev = false;
const port = parseInt(process.env.PORT) || 3000;
const hostname = 'localhost';

console.log('🚀 Starting Simplified Next.js Production Server...');
console.log(`📁 Working Directory: ${process.cwd()}`);
console.log(`🔧 Node Version: ${process.version}`);

// Check if .next directory exists
const nextDir = path.join(process.cwd(), '.next');
if (!fs.existsSync(nextDir)) {
  console.error('❌ .next directory not found! Please run "npm run build" first.');
  process.exit(1);
}
console.log('✅ .next directory found');

// Initialize Next.js with minimal config
const app = next({
  dev: false,
  hostname,
  port,
  dir: process.cwd(),
  conf: {
    compress: true,
    poweredByHeader: false,
    generateEtags: false
  }
});

// Enhanced health check handler
function healthCheck(req, res) {
  if (req.url === '/health' || req.url === '/ping') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      server: 'production-next-server',
      nodeVersion: process.version,
      platform: process.platform,
      pid: process.pid,
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      nextReady: true
    }));
    return true;
  }
  return false;
}

// Main server function
async function startServer() {
  try {
    console.log('⚙️  Preparing Next.js app...');
    
    // Prepare Next.js with timeout
    await Promise.race([
      app.prepare(),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Next.js prepare timeout')), 30000)
      )
    ]);
    
    console.log('✅ Next.js app prepared successfully');
    
    const requestHandler = app.getRequestHandler();
    
    // Create HTTP server
    const server = http.createServer(async (req, res) => {
      try {
        // Handle health checks first
        if (healthCheck(req, res)) {
          return;
        }
        
        // Security headers
        res.setHeader('X-Content-Type-Options', 'nosniff');
        res.setHeader('X-Frame-Options', 'DENY');
        res.setHeader('X-XSS-Protection', '1; mode=block');
        
        // Handle Next.js requests
        await requestHandler(req, res);
        
      } catch (error) {
        console.error('❌ Request error:', error.message);
        
        if (!res.headersSent) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'text/plain');
          res.end(`Server Error: ${error.message}`);
        }
      }
    });

    // Error handling
    server.on('error', (error) => {
      console.error('❌ Server error:', error.message);
      if (error.code === 'EADDRINUSE') {
        console.error(`💡 Port ${port} is already in use`);
      }
      process.exit(1);
    });

    // Start listening
    server.listen(port, hostname, () => {
      console.log(`🌍 Server running at: http://${hostname}:${port}`);
      console.log(`📊 Memory usage: ${JSON.stringify(process.memoryUsage())}`);
      console.log('✅ Server is ready to handle requests');
    });

    // Graceful shutdown
    const shutdown = () => {
      console.log('🛑 Shutting down gracefully...');
      server.close(() => {
        console.log('✅ Server closed');
        process.exit(0);
      });
    };

    process.on('SIGTERM', shutdown);
    process.on('SIGINT', shutdown);
    process.on('SIGHUP', shutdown);

    return server;

  } catch (error) {
    console.error('❌ Failed to start server:', error.message);
    console.error('Stack trace:', error.stack);
    
    // Additional diagnostics
    console.error('\n🔍 Diagnostics:');
    console.error(`- Working dir: ${process.cwd()}`);
    console.error(`- .next exists: ${fs.existsSync('.next')}`);
    console.error(`- package.json exists: ${fs.existsSync('package.json')}`);
    console.error(`- Node version: ${process.version}`);
    console.error(`- Platform: ${process.platform}`);
    
    process.exit(1);
  }
}

// Start the server
if (require.main === module) {
  startServer().catch((error) => {
    console.error('❌ Startup failed:', error);
    process.exit(1);
  });
}

module.exports = { startServer };