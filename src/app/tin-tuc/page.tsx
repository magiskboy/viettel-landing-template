import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSectionGrid } from '@/components/HeroSectionGrid';
import { Section } from '@/components/Section';
import { NewsCard } from '@/components/NewsCard';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tin tức & Sự kiện | Viettel Telecom',
  description: 'Cập nhật tin tức mới nhất về hoạt động của Viettel.',
};

export default function NewsPage() {
  return (
    <main className="min-h-screen flex flex-col pt-16 font-sans">
      <Header />
      <HeroSectionGrid 
        title="TIN TỨC & SỰ KIỆN"
        subtitle="Cập nhật những thông tin mới nhất về hoạt động kinh doanh và đóng góp xã hội của Viettel."
        fullHeight
      />
      
      <Section>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <NewsCard 
                title="VIETTEL THẮNG LỚN TẠI CÁC GIẢI THƯỞNG QUỐC TẾ UY TÍN"
                description="Tập đoàn Công nghiệp – Viễn thông Quân đội Viettel vừa được vinh danh tại ba giải thưởng quốc tế lớn."
                date="Thứ năm, 11/12/2025"
                category="TIN BÁO CHÍ"
            />
             <NewsCard 
                title="VIETTEL KHAI TRƯƠNG VĂN PHÒNG ĐẠI DIỆN TẠI UAE"
                description="Tập đoàn chính thức khai trương Văn phòng đại diện tại Các Tiểu vương quốc Ả Rập Thống nhất."
                date="Thứ năm, 20/11/2025"
                category="TIN TẬP ĐOÀN"
            />
             <NewsCard 
                title="THÔNG BÁO KẾT QUẢ LỰA CHỌN TỔ CHỨC ĐẤU GIÁ TÀI SẢN"
                description="Thông báo kết quả lựa chọn tổ chức đấu giá tài sản lô 30 xe ô tô đã qua sử dụng."
                date="Thứ tư, 28/11/2025"
                category="THÔNG BÁO"
            />
             <NewsCard 
                title="HÀNH TRÌNH 'TRÁI TIM CHO EM' ĐẾN VỚI TÂY NGUYÊN"
                description="Chương trình khám sàng lọc bệnh tim miễn phí cho trẻ em nghèo tại các tỉnh Tây Nguyên."
                date="Thứ sáu, 15/12/2025"
                category="CỘNG ĐỒNG"
            />
             <NewsCard 
                title="RA MẮT GÓI CƯỚC 5G SIÊU TỐC CHO DOANH NGHIỆP"
                description="Giải pháp kết nối toàn diện hỗ trợ chuyển đổi số cho doanh nghiệp vừa và nhỏ."
                date="Thứ hai, 05/12/2025"
                category="SẢN PHẨM"
            />
             <NewsCard 
                title="VIETTEL MONEY TẶNG VÀNG CHO KHÁCH HÀNG MAY MẮN"
                description="Chương trình tri ân khách hàng nhân dịp kỷ niệm sinh nhật Viettel Money."
                date="Chủ nhật, 01/01/2026"
                category="KHUYẾN MÃI"
            />
        </div>
      </Section>
      <Footer />
    </main>
  );
}
