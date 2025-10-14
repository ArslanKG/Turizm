import { Metadata } from 'next'
import CareerHero from '@/components/sections/CareerHero'
import CareerPositions from '@/components/sections/CareerPositions'
import CareerBenefits from '@/components/sections/CareerBenefits'
import CareerApplication from '@/components/sections/CareerApplication'

export const metadata: Metadata = {
  title: 'Kariyer - Parla Travel | İş Fırsatları ve Açık Pozisyonlar',
  description: 'Parla Travel\'da kariyer fırsatları, açık pozisyonlar ve çalışan avantajları. Turizm sektöründe profesyonel ekibimize katılın.',
  keywords: 'kariyer, iş ilanları, açık pozisyonlar, parla travel, turizm, rehberlik, seyahat, işe alım',
}

export default function CareerPage() {
  return (
    <main className="min-h-screen">
      <CareerHero />
      <CareerPositions />
      <CareerBenefits />
      <CareerApplication />
    </main>
  )
}