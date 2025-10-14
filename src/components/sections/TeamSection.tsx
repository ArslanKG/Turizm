'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Linkedin, Mail } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  position: string;
  department: string;
  image: string;
  bio: string;
  email: string;
  linkedin?: string;
  specialties: string[];
}

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Ahmet Parla',
    position: 'Kurucu & CEO',
    department: 'Yönetim',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ahmet&backgroundColor=b6e3f4,c0aede,d1d4f9',
    bio: 'Turizm İşletmecisi. 20+ yıllık turizm sektörü deneyimi ile Parla Travel\'ı sektörde lider konuma taşıdı.',
    email: 'ahmet.parla@parlatravel.com',
    linkedin: '#',
    specialties: ['Tur Operasyonu', 'Stratejik Planlama', 'Sürdürülebilir Turizm']
  },
  {
    id: '2',
    name: 'Elif Kaya',
    position: 'Baş Rehber',
    department: 'Rehberlik',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=elif&backgroundColor=ffdfbf,ffd5dc,c0aede',
    bio: 'Profesyonel Turist Rehberi. Sanat tarihi ve kültür turları konusunda uzman.',
    email: 'elif.kaya@parlatravel.com',
    linkedin: '#',
    specialties: ['Kültür Turları', 'Sanat Tarihi', 'Çoklu Dil']
  },
  {
    id: '3',
    name: 'Mehmet Öztürk',
    position: 'Tur Operasyon Müdürü',
    department: 'Operasyon',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=mehmet&backgroundColor=b6e3f4,d1d4f9,ffdfbf',
    bio: 'Turizm İşletmecisi. Büyük grup turlarının organizasyonu ve kaliteli hizmet sunumunda uzman.',
    email: 'mehmet.ozturk@parlatravel.com',
    linkedin: '#',
    specialties: ['Tur Operasyonu', 'Grup Yönetimi', 'Kalite Kontrol']
  },
  {
    id: '4',
    name: 'Zeynep Demir',
    position: 'Pazarlama Direktörü',
    department: 'Pazarlama',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=zeynep&backgroundColor=ffd5dc,c0aede,b6e3f4',
    bio: 'İşletme Yüksek Lisans. Dijital pazarlama ve turizm iletişimi konularında uzman.',
    email: 'zeynep.demir@parlatravel.com',
    linkedin: '#',
    specialties: ['Dijital Pazarlama', 'Sosyal Medya', 'Turizm İletişimi']
  },
  {
    id: '5',
    name: 'Can Yılmaz',
    position: 'Rezervasyon Müdürü',
    department: 'Rezervasyon',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=can&backgroundColor=d1d4f9,ffdfbf,ffd5dc',
    bio: 'Otel ve ulaşım rezervasyonları konusunda 10+ yıllık deneyime sahip uzman.',
    email: 'can.yilmaz@parlatravel.com',
    linkedin: '#',
    specialties: ['Otel Rezervasyonu', 'Ulaşım Planlaması', 'Müşteri Hizmetleri']
  },
  {
    id: '6',
    name: 'Seda Aktaş',
    position: 'Müşteri Hizmetleri Müdürü',
    department: 'Müşteri Hizmetleri',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=seda&backgroundColor=c0aede,b6e3f4,d1d4f9',
    bio: 'Turizm ve Otel İşletmeciliği mezunu. Misafir memnuniyeti ve müşteri deneyimi konularında uzman.',
    email: 'seda.aktas@parlatravel.com',
    linkedin: '#',
    specialties: ['Müşteri Deneyimi', 'Misafir Memnuniyeti', 'CRM Yönetimi']
  }
];

const departments = ['Tümü', 'Yönetim', 'Rehberlik', 'Operasyon', 'Pazarlama', 'Rezervasyon', 'Müşteri Hizmetleri'];

export default function TeamSection() {
  const [selectedDepartment, setSelectedDepartment] = useState('Tümü');
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  const filteredMembers = selectedDepartment === 'Tümü' 
    ? teamMembers 
    : teamMembers.filter(member => member.department === selectedDepartment);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-purple-200 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-display">
            <span className="text-gradient">Ekibimiz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Parla Travel'ın başarısında emeği geçen deneyimli ve tutkulu ekip üyelerimizle tanışın.
          </p>
        </div>

        {/* Department Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {departments.map((department) => (
            <button
              key={department}
              onClick={() => setSelectedDepartment(department)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedDepartment === department
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
              }`}
            >
              {department}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member, index) => (
            <div
              key={member.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Social Links Overlay */}
                <div className={`absolute inset-0 bg-blue-600/90 flex items-center justify-center space-x-4 transition-opacity duration-300 ${
                  hoveredMember === member.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <a
                    href={`mailto:${member.email}`}
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                </div>

                {/* Department Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold rounded-full">
                    {member.department}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-200">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2">
                  {member.specialties.slice(0, 3).map((specialty, specIndex) => (
                    <span
                      key={specIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-70" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Ekibimize Katılın</h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Parla Travel ailesinin bir parçası olmak ve Türkiye turizminin gelişimine katkıda bulunmak ister misiniz?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200">
                  Açık Pozisyonlar
                </button>
                <button className="px-8 py-3 border border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-200">
                  Özgeçmiş Gönder
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}