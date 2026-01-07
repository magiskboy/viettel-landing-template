import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSectionGrid } from '@/components/HeroSectionGrid';
import { Section } from '@/components/Section';


import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Về Viettel | Viettel Telecom',
  description: 'Sáng tạo vì con người - Tiên phong chủ lực kiến tạo xã hội số.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col pt-16 font-sans">
      <Header />
      <HeroSectionGrid 
        title="VỀ VIETTEL"
        subtitle="Sáng tạo vì con người - Tiên phong chủ lực kiến tạo xã hội số."
        ctaText="Xem lịch sử phát triển"
        fullHeight
      />
      
      <Section className="text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">GIÁ TRỊ CỐT LÕI</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
                "Thực tiễn là tiêu chuẩn kiểm nghiệm chân lý",
                "Trưởng thành qua những thách thức và thất bại",
                "Thích ứng nhanh là sức mạnh cạnh tranh",
                "Sáng tạo là sức sống",
                "Tư duy hệ thống",
                "Kết hợp Đông Tây",
                "Truyền thống và cách tân",
                "Viettel là ngôi nhà chung"
            ].map((val, idx) => (
                <div key={idx} className="bg-gray-50 p-6 rounded-lg hover:bg-viettel-red hover:text-white transition-all group">
                    <div className="text-4xl font-bold text-gray-200 group-hover:text-white/20 mb-4">{idx + 1}</div>
                    <h3 className="font-bold text-lg">{val}</h3>
                </div>
            ))}
        </div>
      </Section>
      <Footer />
    </main>
  );
}
