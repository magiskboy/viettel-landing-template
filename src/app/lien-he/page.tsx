import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSectionGrid } from '@/components/HeroSectionGrid';
import { Section } from '@/components/Section';
import { ContactForm } from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col pt-16 font-sans">
      <Header />
      <HeroSectionGrid 
        title="LIÊN HỆ"
        subtitle="Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn 24/7."
        fullHeight
      />
      
      <Section>
        <div className="text-center mb-12">
            <p className="text-xl text-gray-600">Tổng đài CSKH: <strong className="text-viettel-red">1800 8098</strong> (Miễn phí)</p>
        </div>
        <ContactForm />
      </Section>
      <Footer />
    </main>
  );
}
