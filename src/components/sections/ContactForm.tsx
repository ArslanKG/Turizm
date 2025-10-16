'use client';

import { useState } from 'react';
import { Send, User, Mail, Phone, MessageSquare, Building, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    budget: '',
    timeline: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('contact.form.title')}
          </h2>
          
          <div className="w-24 h-1 bg-orange-300 mx-auto mb-6"></div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.form.description')}
            {' '}{t('contact.form.description.support')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left - Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        {t('contact.form.name.label')} *
                      </div>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-300 focus:border-transparent transition-all duration-300"
                      placeholder={t('contact.form.name.placeholder')}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        {t('contact.form.email.label')} *
                      </div>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-300 focus:border-transparent transition-all duration-300"
                      placeholder={t('contact.form.email.placeholder')}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        {t('contact.form.phone.label')} *
                      </div>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-300 focus:border-transparent transition-all duration-300"
                      placeholder={t('contact.form.phone.placeholder')}
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4" />
                        {t('contact.form.company.label')}
                      </div>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-300 focus:border-transparent transition-all duration-300"
                      placeholder={t('contact.form.company.placeholder')}
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.service.label')} *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-300 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">{t('contact.form.service.placeholder')}</option>
                      <option value="kultur-turu">{t('contact.form.service.cultural-tours')}</option>
                      <option value="ozel-tur">{t('contact.form.service.custom-tours')}</option>
                      <option value="otel-rezervasyon">{t('contact.form.service.hotel-reservation')}</option>
                      <option value="grup-turu">{t('contact.form.service.group-tours')}</option>
                      <option value="rehberlik">{t('contact.form.service.guide-services')}</option>
                      <option value="diger">{t('contact.form.service.other')}</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.budget.label')}
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-300 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">{t('contact.form.budget.placeholder')}</option>
                      <option value="5k-15k">{t('contact.form.budget.5k-15k')}</option>
                      <option value="15k-30k">{t('contact.form.budget.15k-30k')}</option>
                      <option value="30k-50k">{t('contact.form.budget.30k-50k')}</option>
                      <option value="50k+">{t('contact.form.budget.50k+')}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {t('contact.form.timeline.label')}
                    </div>
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-300 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">{t('contact.form.timeline.placeholder')}</option>
                    <option value="asap">{t('contact.form.timeline.asap')}</option>
                    <option value="1-month">{t('contact.form.timeline.1-month')}</option>
                    <option value="3-months">{t('contact.form.timeline.3-months')}</option>
                    <option value="6-months">{t('contact.form.timeline.6-months')}</option>
                    <option value="flexible">{t('contact.form.timeline.flexible')}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4" />
                      {t('contact.form.message.label')} *
                    </div>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-300 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder={t('contact.form.message.placeholder')}
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    className="mt-1 w-4 h-4 text-orange-300 border-gray-300 rounded focus:ring-orange-300"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    {t('contact.form.consent.text')} *
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-orange-300 text-white font-medium rounded-xl hover:bg-orange-400 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  <span>{t('contact.form.submit.text')}</span>
                </button>
              </form>
            </div>
          </div>

          {/* Right - Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t('contact.form.process.title')}
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-semibold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('contact.form.process.step1.title')}</h4>
                    <p className="text-sm text-gray-600">{t('contact.form.process.step1.description')}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-semibold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('contact.form.process.step2.title')}</h4>
                    <p className="text-sm text-gray-600">{t('contact.form.process.step2.description')}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-semibold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('contact.form.process.step3.title')}</h4>
                    <p className="text-sm text-gray-600">{t('contact.form.process.step3.description')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t('contact.form.quick.title')}
              </h3>
              <div className="space-y-3">
                <p className="text-sm text-gray-600">
                  {t('contact.form.quick.description')}
                </p>
                <div className="space-y-2">
                  <a href="tel:+902125550123" className="flex items-center gap-2 text-orange-600 font-semibold">
                    <Phone className="h-4 w-4" />
                    {t('contact.form.quick.phone')}
                  </a>
                  <a href="mailto:info@parlatravel.com" className="flex items-center gap-2 text-orange-600 font-semibold">
                    <Mail className="h-4 w-4" />
                    {t('contact.form.quick.email')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}