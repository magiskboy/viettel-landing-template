import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { ContactForm } from '@/components/ContactForm';
import { NewsCard } from '@/components/NewsCard';
import { TabNavigation } from '@/components/TabNavigation';

export default function LandingTemplate() {
  return (
    <main className="min-h-screen flex flex-col pt-16">
      <Header />
      
      {/* SECTION 1: HERO - Campaign Main Visual */}
      <Hero 
        title="KIẾN TẠO XÃ HỘI SỐ"
        subtitle="Tiên phong chủ lực kiến tạo xã hội số, Viettel cam kết mang lại những giá trị tốt đẹp nhất cho con người."
        ctaText="Khám phá ngay"
        // Example background image, replace with campaign asset
        // backgroundImage="/path-to-your-image.jpg"
      />

      {/* SECTION 2: KEY SERVICES/BENEFITS */}
      <Section id="services">
        <div className="text-center mb-16">
          <span className="text-viettel-red font-bold uppercase tracking-widest text-sm mb-2 block">Sản phẩm & Dịch vụ</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Hệ sinh thái số toàn diện
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card 
            title="Viễn thông" 
            description="Hạ tầng mạng lưới rộng khắp, chất lượng vượt trội, kết nối mọi lúc mọi nơi."
            icon={<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>}
          />
          <Card 
            title="Giải pháp Số" 
            description="Đồng hành cùng doanh nghiệp chuyển đổi số với bộ giải pháp thông minh, bảo mật."
            icon={<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
          />
          <Card 
            title="Bảo mật An toàn" 
            description="Lá chắn thép bảo vệ dữ liệu và hệ thống thông tin quốc gia và doanh nghiệp."
            icon={<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>}
          />
        </div>
      </Section>

      {/* SECTION 3: FEATURE HIGHLIGHT (Grey Background) */}
      <Section bg="gray" className="relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
             <div className="bg-gray-200 w-full h-80 flex items-center justify-center text-gray-400">
                {/* Image Placeholder */}
                <span>Campaign Visual Placeholder 800x600</span>
             </div>
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Công nghệ từ trái tim</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Chúng tôi tin rằng công nghệ sinh ra là để phục vụ con người. Tại Viettel, mỗi sáng tạo đều bắt nguồn từ sự thấu hiểu và khát vọng mang lại cuộc sống tốt đẹp hơn cho người Việt.
            </p>
            <ul className="space-y-4 mb-8">
              {['Phủ sóng 100% xã phường', 'Hỗ trợ nông dân chuyển đổi số', 'Y tế thông minh tới vùng sâu vùng xa'].map(item => (
                <li key={item} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-viettel-red mr-3 block"></span> {/* Viettel square dot */}
                  {item}
                </li>
              ))}
            </ul>
            <Button>Xem câu chuyện</Button>
          </div>
        </div>
      </Section>

      {/* SECTION 4: TABS DEMO (History/Packages) */}
      <Section className="text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">HÀNH TRÌNH PHÁT TRIỂN</h2>
        <div className="max-w-4xl mx-auto">
            <TabNavigation 
                variant="history"
                items={[
                    {
                        id: '1.0',
                        label: '1.0',
                        content: (
                            <div className="bg-gray-50 p-8 text-left">
                                <h3 className="text-2xl font-bold text-viettel-red mb-4">Viettel 1.0 (1989 - 1999)</h3>
                                <p className="text-gray-700 leading-relaxed">Giai đoạn khởi tạo, xây lắp công trình viễn thông. Đặt nền móng cho những trạm phát sóng đầu tiên trên khắp lãnh thổ Việt Nam.</p>
                            </div>
                        )
                    },
                    {
                        id: '2.0',
                        label: '2.0',
                        content: (
                            <div className="bg-gray-50 p-8 text-left">
                                <h3 className="text-2xl font-bold text-viettel-red mb-4">Viettel 2.0 (2000 - 2009)</h3>
                                <p className="text-gray-700 leading-relaxed">Bùng nổ di động. Phổ cập dịch vụ di động tới mọi người dân Việt Nam, đưa nông thôn kết nối với thế giới.</p>
                            </div>
                        )
                    },
                    {
                        id: '3.0',
                        label: '3.0',
                        content: (
                            <div className="bg-gray-50 p-8 text-left">
                                <h3 className="text-2xl font-bold text-viettel-red mb-4">Viettel 3.0 (2010 - 2018)</h3>
                                <p className="text-gray-700 leading-relaxed">Đầu tư quốc tế & Công nghệ cao. Viettel vươn mình trở thành tập đoàn toàn cầu, hiện diện tại 10 quốc gia.</p>
                            </div>
                        )
                    },
                    {
                        id: '4.0',
                        label: '4.0',
                        content: (
                           <div className="bg-gray-50 p-8 text-left">
                                <h3 className="text-2xl font-bold text-viettel-red mb-4">Viettel 4.0 (2018 - Nay)</h3>
                                <p className="text-gray-700 leading-relaxed">Kiến tạo xã hội số. Tiên phong chủ đạo kiến tạo xã hội số tại Việt Nam với các nền tảng chuyển đổi số toàn diện.</p>
                            </div>
                        )
                    }
                ]}
            />
        </div>
      </Section>

      {/* SECTION 5: STATS / PROOF */}
      <Section>
        <div className="bg-viettel-red text-white p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">VIETTEL - THƯƠNG HIỆU GIÁ TRỊ NHẤT VIỆT NAM</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl md:text-5xl font-extrabold mb-2">30+</div>
              <div className="text-sm opacity-90 uppercase">Quốc gia</div>
            </div>
             <div>
              <div className="text-4xl md:text-5xl font-extrabold mb-2">100M+</div>
              <div className="text-sm opacity-90 uppercase">Khách hàng</div>
            </div>
             <div>
              <div className="text-4xl md:text-5xl font-extrabold mb-2">TOP 1</div>
              <div className="text-sm opacity-90 uppercase">Viễn thông ĐNA</div>
            </div>
             <div>
              <div className="text-4xl md:text-5xl font-extrabold mb-2">5G</div>
              <div className="text-sm opacity-90 uppercase">Tiên phong</div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* SECTION 6: NEWS */}
      <Section bg="gray">
        <div className="flex justify-between items-end mb-12">
            <div>
                <span className="text-viettel-red font-bold uppercase tracking-widest text-sm mb-2 block">Cập nhật</span>
                <h2 className="text-3xl font-bold text-gray-900">Tin tức - Sự kiện</h2>
            </div>
             <Button variant="outline" className="hidden md:flex">Xem tất cả</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <NewsCard 
                title="VIETTEL THẮNG LỚN TẠI CÁC GIẢI THƯỞNG QUỐC TẾ UY TÍN"
                description="Tập đoàn Công nghiệp – Viễn thông Quân đội Viettel vừa được vinh danh tại ba giải thưởng quốc tế lớn về công nghệ và viễn thông."
                date="Thứ năm, 11/12/2025"
                category="TIN BÁO CHÍ"
                image="https://viettel.com.vn/images/Viettel-thang-lon-tai-cac-giai-thuong-quoc-te-uy-tin-thumb-244247854.jpg" 
            />
             <NewsCard 
                title="THÔNG BÁO KẾT QUẢ LỰA CHỌN TỔ CHỨC ĐẤU GIÁ TÀI SẢN"
                description="Thông báo kết quả lựa chọn tổ chức đấu giá tài sản lô 30 xe ô tô đã qua sử dụng, không còn nhu cầu sử dụng."
                date="Thứ tư, 28/11/2025"
                category="THÔNG BÁO"
                image="https://viettel.com.vn/images/TB-kq-lua-chon-to-chuc-dau-gia-tai-san-lo-30-xe-o-to-cu-thumb-2070967397.jpg" 
            />
             <NewsCard 
                title="VIETTEL KHAI TRƯƠNG VĂN PHÒNG ĐẠI DIỆN TẠI UAE"
                description="Tập đoàn chính thức khai trương Văn phòng đại diện tại Các Tiểu vương quốc Ả Rập Thống nhất (UAE), đánh dấu bước tiến mới."
                date="Thứ năm, 20/11/2025"
                category="TIN TẬP ĐOÀN"
                image="https://viettel.com.vn/images/Viettel-High-Tech-khai-truong-van-phong-dai-dien-tai-UAE-thumb-299622591.jpg" 
            />
        </div>
      </Section>

      {/* SECTION 7: CONTACT FORM */}
      <Section id="contact">
        <div className="text-center mb-12">
           <h2 className="text-3xl font-bold text-gray-900 mb-4">Liên hệ với chúng tôi</h2>
           <p className="text-gray-600">Gửi yêu cầu của bạn, chúng tôi sẽ phản hồi trong thời gian sớm nhất.</p>
        </div>
        <ContactForm />
      </Section>

      <Footer />
    </main>
  );
}
