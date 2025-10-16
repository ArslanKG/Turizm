'use client';

import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactHero() {
  const { t } = useLanguage();
  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m0 60l60-60h-60v60zm60 0v-60h-60l60 60z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                {t('contact.hero.title.main')}
                <span className="block text-orange-300">{t('contact.hero.title.highlight')}</span>
              </h1>
              
              <div className="w-24 h-1 bg-white"></div>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                {t('contact.hero.description')}
                <strong className="text-orange-300">{t('contact.hero.description.highlight')}</strong>.
              </p>
            </div>

            {/* Quick Contact Info */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-300 mb-2">{t('contact.hero.stats.service.value')}</div>
                <div className="text-gray-400 text-sm">{t('contact.hero.stats.service.label')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-300 mb-2">{t('contact.hero.stats.response.value')}</div>
                <div className="text-gray-400 text-sm">{t('contact.hero.stats.response.label')}</div>
              </div>
            </div>
          </div>

          {/* Right Contact Cards */}
          <div className="grid gap-6">
            {/* Phone */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-300 rounded-xl flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{t('contact.info.phone.title')}</h3>
                  <p className="text-gray-300">{t('contact.info.phone.number')}</p>
                  <p className="text-sm text-gray-400">{t('contact.info.phone.hours')}</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-300 rounded-xl flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{t('contact.info.email.title')}</h3>
                  <p className="text-gray-300">{t('contact.info.email.address')}</p>
                  <p className="text-sm text-gray-400">{t('contact.info.email.support')}</p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-300 rounded-xl flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{t('contact.info.address.title')}</h3>
                  <p className="text-gray-300">{t('contact.info.address.street')}</p>
                  <p className="text-gray-300">{t('contact.info.address.details')}</p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-300 rounded-xl flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{t('contact.info.hours.title')}</h3>
                  <p className="text-gray-300">{t('contact.info.hours.weekdays')}</p>
                  <p className="text-gray-300">{t('contact.info.hours.saturday')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}