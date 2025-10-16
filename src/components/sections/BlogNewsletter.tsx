'use client';

import { Mail, Bell, Users, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function BlogNewsletter() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m0 80l80-80h-80v80zm80 0v-80h-80l80 80z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('blog-detail.newsletter.title')}
            <span className="block text-orange-300">{t('blog-detail.newsletter.subtitle')}</span>
          </h2>
          
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('blog-detail.newsletter.description')}
            <strong className="text-orange-300"> {t('blog-detail.newsletter.description.highlight')}</strong>.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Newsletter Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-300 rounded-xl flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{t('blog-detail.newsletter.form.title')}</h3>
                  <p className="text-gray-400">{t('blog-detail.newsletter.form.subtitle')}</p>
                </div>
              </div>

              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('blog-detail.newsletter.form.email.label')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder={t('blog-detail.newsletter.form.email.placeholder')}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('blog-detail.newsletter.form.name.label')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder={t('blog-detail.newsletter.form.name.placeholder')}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    className="mt-1 w-4 h-4 text-orange-300 border-gray-300 rounded focus:ring-orange-300"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-300">
                    {t('blog-detail.newsletter.form.consent')}
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-orange-300 text-white font-medium rounded-xl hover:bg-orange-400 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  {t('blog-detail.newsletter.form.submit')}
                </button>
              </form>
            </div>
          </div>

          {/* Right - Benefits */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold text-white mb-6">
                {t('blog-detail.newsletter.benefits.title')}
              </h3>
            </div>

            <div className="grid gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-300/20 rounded-xl flex items-center justify-center">
                  <Bell className="h-6 w-6 text-orange-300" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {t('blog-detail.newsletter.benefits.priority.title')}
                  </h4>
                  <p className="text-gray-300">
                    {t('blog-detail.newsletter.benefits.priority.description')}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-300/20 rounded-xl flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-orange-300" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {t('blog-detail.newsletter.benefits.analysis.title')}
                  </h4>
                  <p className="text-gray-300">
                    {t('blog-detail.newsletter.benefits.analysis.description')}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-300/20 rounded-xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-orange-300" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {t('blog-detail.newsletter.benefits.offers.title')}
                  </h4>
                  <p className="text-gray-300">
                    {t('blog-detail.newsletter.benefits.offers.description')}
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-300 mb-2">5K+</div>
                <div className="text-gray-400">{t('blog-detail.newsletter.stats.subscribers')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-300 mb-2">%98</div>
                <div className="text-gray-400">{t('blog-detail.newsletter.stats.satisfaction')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}