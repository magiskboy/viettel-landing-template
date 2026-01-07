import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSectionGrid } from '@/components/HeroSectionGrid';
import { Section } from '@/components/Section';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Khách hàng & Cộng đồng | Viettel Telecom',
  description: 'Kinh doanh gắn liền với trách nhiệm xã hội.',
};

export default function CustomersPage() {
  return (
    <main className="min-h-screen flex flex-col pt-16 font-sans">
      <Header />
      <HeroSectionGrid 
        title="KHÁCH HÀNG & CỘNG ĐỒNG"
        subtitle="Kinh doanh gắn liền với trách nhiệm xã hội. Chúng tôi không chỉ kết nối con người mà còn kết nối yêu thương."
        ctaText="Dự án tiêu biểu"
        fullHeight
      />
      
      <Section className="text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">THÀNH TỰU NỔI BẬT</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
                <div className="text-6xl font-extrabold text-viettel-red mb-4">8.9 tỷ $</div>
                <div className="text-xl font-bold text-gray-800 uppercase mb-2">Giá trị thương hiệu</div>
                <p className="text-gray-500">Thương hiệu giá trị nhất Việt Nam</p>
            </div>
            <div>
                <div className="text-6xl font-extrabold text-viettel-red mb-4">#1</div>
                <div className="text-xl font-bold text-gray-800 uppercase mb-2">Đông Nam Á</div>
                <p className="text-gray-500">Về viễn thông di động</p>
            </div>
             <div>
                <div className="text-6xl font-extrabold text-viettel-red mb-4">Top 2</div>
                <div className="text-xl font-bold text-gray-800 uppercase mb-2">Thế giới</div>
                <p className="text-gray-500">Về sức mạnh thương hiệu viễn thông</p>
            </div>
        </div>
      </Section>
      <Footer />
    </main>
  );
}
