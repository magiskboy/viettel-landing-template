import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

import { HeroSectionGrid } from '@/components/HeroSectionGrid';
import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { ContactForm } from '@/components/ContactForm';
import { TabNavigation } from '@/components/TabNavigation';

export default function Landing5GGenZ() {
  return (
    <main className="min-h-screen flex flex-col pt-16 font-sans">
      <Header />
      
      {/* SECTION 1: HERO - Dynamic & Youthful */}
      <HeroSectionGrid 
        title="5G SIÊU TỐC - SỐNG CHẤT GEN Z"
        subtitle="Lướt TikTok thả ga, xem Livestream mượt mà. Gói cước được thiết kế riêng cho thế hệ dẫn đầu xu hướng."
        ctaText="Trải nghiệm ngay"
        fullHeight
      />

      {/* SECTION 2: PAIN POINTS & SOLUTION */}
      <Section className="text-center">
         <h2 className="text-3xl font-bold mb-4 text-gray-900">Tại sao chọn Viettel 5G GenZ?</h2>
         <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Tạm biệt mạng lag, xoá bỏ giới hạn dung lượng. Kết nối không giới hạn để bạn tự do sáng tạo.</p>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card 
                title="Tốc độ không tưởng"
                description="Nhanh gấp 10 lần 4G. Tải phim 4K trong tích tắc, chơi game ping thấp cực đã."
                icon={<svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
            />
            <Card 
                title="Data không giới hạn"
                description="Miễn phí 100% data truy cập TikTok, FaceBook, Instagram. Xem video cả ngày không lo hết dung lượng."
                icon={<svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>}
            />
             <Card 
                title="Giá siêu 'hạt dẻ'"
                description="Chỉ từ 2k/ngày. Combo data + thoại + voucher trà sữa hàng tháng."
                icon={<svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
            />
         </div>
      </Section>

      {/* SECTION 3: PACKAGES TABS (Pricing) */}
      <Section bg="gray">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 uppercase">Chọn &apos;Gu&apos; gói cước của bạn</h2>
        <div className="max-w-5xl mx-auto">
            <TabNavigation 
                items={[
                    {
                        id: 'ngay',
                        label: 'Gói Ngày',
                        content: (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                <div className="bg-white p-8 border border-gray-200 hover:border-viettel-red transition-all">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">ST5K</h3>
                                    <div className="text-4xl font-extrabold text-viettel-red mb-4">5.000đ<span className="text-base text-gray-500 font-normal">/ngày</span></div>
                                    <ul className="space-y-3 mb-8 text-gray-600">
                                        <li>✓ 500MB Data tốc độ cao</li>
                                        <li>✓ Hết lưu lượng truy cập tốc độ thường</li>
                                        <li>✓ Tự động gia hạn</li>
                                    </ul>
                                    <Button fullWidth>Đăng ký ngay</Button>
                                    <p className="text-center text-xs text-gray-400 mt-3">Soạn ST5K gửi 191</p>
                                </div>
                                <div className="bg-white p-8 border border-gray-200 hover:border-viettel-red transition-all relative">
                                    <div className="absolute top-0 right-0 bg-viettel-red text-white text-xs font-bold px-3 py-1 uppercase">Best Choice</div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">ST15K</h3>
                                    <div className="text-4xl font-extrabold text-viettel-red mb-4">15.000đ<span className="text-base text-gray-500 font-normal">/3 ngày</span></div>
                                     <ul className="space-y-3 mb-8 text-gray-600">
                                        <li>✓ 3GB Data tốc độ cao</li>
                                        <li>✓ Miễn phí xem TikTok</li>
                                        <li>✓ Tự động gia hạn</li>
                                    </ul>
                                    <Button fullWidth>Đăng ký ngay</Button>
                                    <p className="text-center text-xs text-gray-400 mt-3">Soạn ST15K gửi 191</p>
                                </div>
                            </div>
                        )
                    },
                    {
                        id: 'thang',
                        label: 'Gói Tháng',
                        content: (
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Package 1 */}
                                <div className="bg-white p-6 border border-gray-200 hover:border-viettel-red transition-all">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">V120Z</h3>
                                    <div className="text-3xl font-extrabold text-viettel-red mb-4">90.000đ</div>
                                    <p className="text-gray-500 text-sm mb-6 border-b border-gray-100 pb-4">Dành cho HSSV</p>
                                    <ul className="space-y-2 mb-6 text-sm text-gray-600">
                                        <li><b>4GB/ngày</b> Data tốc độ cao</li>
                                        <li>Miễn phí 20p/cuộc gọi nội mạng</li>
                                        <li>Miễn phí 50p ngoại mạng</li>
                                    </ul>
                                    <Button variant="outline" size="sm" fullWidth>Chọn gói này</Button>
                                </div>
                                 {/* Package 2 - Highlighted */}
                                 <div className="bg-white p-6 border-2 border-viettel-red shadow-lg transform md:-translate-y-4">
                                    <div className="text-center mb-4">
                                        <span className="bg-viettel-red text-white px-4 py-1 rounded-full text-xs font-bold uppercase">Siêu Hot</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">V150Z</h3>
                                    <div className="text-4xl font-extrabold text-viettel-red mb-4">120.000đ</div>
                                    <p className="text-gray-500 text-sm mb-6 border-b border-gray-100 pb-4">Thoải mái lướt net</p>
                                    <ul className="space-y-2 mb-6 text-sm text-gray-600">
                                        <li><b>6GB/ngày</b> Data tốc độ cao</li>
                                        <li>Miễn phí Data TikTok, YouTube</li>
                                        <li>Miễn phí gọi nội mạng &lt; 20p</li>
                                    </ul>
                                    <Button fullWidth>Đăng ký ngay</Button>
                                </div>
                                 {/* Package 3 */}
                                 <div className="bg-white p-6 border border-gray-200 hover:border-viettel-red transition-all">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">V200Z</h3>
                                    <div className="text-3xl font-extrabold text-viettel-red mb-4">200.000đ</div>
                                    <p className="text-gray-500 text-sm mb-6 border-b border-gray-100 pb-4">Không giới hạn</p>
                                    <ul className="space-y-2 mb-6 text-sm text-gray-600">
                                        <li><b>8GB/ngày</b> Data tốc độ cao</li>
                                        <li>Miễn phí Data Social Apps</li>
                                        <li>100p gọi ngoại mạng</li>
                                    </ul>
                                    <Button variant="outline" size="sm" fullWidth>Chọn gói này</Button>
                                </div>
                            </div>
                        )
                    }
                ]}
            />
        </div>
      </Section>

      {/* SECTION 4: ENTERTAINMENT PARTNERS (Logo Grid) */}
      <Section className="text-center">
        <p className="text-gray-500 uppercase tracking-widest font-bold mb-8">Data miễn phí trọn đời cho các ứng dụng</p>
        <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Simple text placeholders for logos, in real project replace with SVGs */}
            <span className="text-2xl font-bold text-gray-800">TikTok</span>
            <span className="text-2xl font-bold text-gray-800">Facebook</span>
            <span className="text-2xl font-bold text-gray-800">Instagram</span>
            <span className="text-2xl font-bold text-gray-800">YouTube</span>
            <span className="text-2xl font-bold text-gray-800">Spotify</span>
        </div>
      </Section>

      {/* SECTION 5: REGISTRATION FORM */}
      <Section bg="gray" id="register">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Đăng ký tư vấn gói cước</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                    Bạn chưa biết gói cước nào phù hợp? Để lại thông tin, nhân viên Viettel sẽ gọi điện tư vấn trực tiếp cho bạn trong vòng 5 phút (miễn phí).
                </p>
                <div className="flex items-start mb-6">
                    <div className="text-viettel-red mr-4 mt-1">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900">Không cần ra cửa hàng</h4>
                        <p className="text-sm text-gray-600">Đăng ký online, SIM ship tận nhà.</p>
                    </div>
                </div>
                 <div className="flex items-start">
                    <div className="text-viettel-red mr-4 mt-1">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900">Bảo mật thông tin</h4>
                        <p className="text-sm text-gray-600">Cam kết bảo mật tuyệt đối thông tin khách hàng.</p>
                    </div>
                </div>
            </div>
            <div className="bg-white p-8 shadow-xl">
                 <ContactForm />
            </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
