import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSectionGrid } from '@/components/HeroSectionGrid';
import { Section } from '@/components/Section';
import { Card } from '@/components/Card';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dịch vụ & Giải pháp | Viettel Telecom',
  description: 'Hệ sinh thái giải pháp số toàn diện, phục vụ mọi nhu cầu cuộc sống.',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col pt-16 font-sans">
      <Header />
      <HeroSectionGrid 
        title="LĨNH VỰC HOẠT ĐỘNG"
        subtitle="Hệ sinh thái giải pháp số toàn diện, phục vụ mọi nhu cầu của cuộc sống."
        ctaText="Liên hệ tư vấn"
        fullHeight
      />
      
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card title="Hạ tầng viễn thông" description="Mạng di động 4G/5G rộng khắp, Internet cáp quang siêu tốc." 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="square" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg>}
            />
            <Card title="Giải pháp số" description="Thanh toán số Viettel Money, Chính phủ điện tử, Y tế số, Giáo dục số." 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="square" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>}
            />
            <Card title="Logistics & eCommerce" description="Giải pháp vận chuyển thông minh Viettel Post, kho vận hiện đại." 
                 icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="square" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 00-1 1v1H7v-3a1 1 0 00-1-1H3M17 14v1m0 0v3m0-3h-1m1 3h2.618m2.382-3.118l-2.091-2.09A1 1 0 0017.909 13H15v4" /></svg>}
            />
             <Card title="An ninh mạng" description="Bảo mật hạ tầng trọng yếu, giám sát an toàn thông tin 24/7." 
                 icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="square" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
            />
             <Card title="Nghiên cứu sản xuất" description="Làm chủ công nghệ lõi 5G, thiết bị quân sự công nghệ cao." 
                 icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="square" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>}
            />
             <Card title="Đầu tư quốc tế" description="Hiện diện tại 10 quốc gia, mang thương hiệu Việt ra thế giới." 
                 icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="square" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
            />
        </div>
      </Section>
      <Footer />
    </main>
  );
}
