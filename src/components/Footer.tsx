import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand */}
          <div className="col-span-1">
            <div className="mb-6">
               {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/logo.png" 
                alt="Viettel Logo" 
                className="h-12 w-auto filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
              />
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Tập đoàn Công nghiệp - Viễn thông Quân đội.<br/>
              Sáng tạo vì con người.
            </p>
            <p className="text-sm text-gray-600">
              Trụ sở: Lô D26 Khu đô thị mới Cầu Giấy, Hà Nội
            </p>
          </div>

          {/* Column 2: Links */}
          <div className="col-span-1">
            <h4 className="font-bold text-gray-900 uppercase mb-4">Về Viettel</h4>
            <ul className="space-y-3">
              {['Tổng quan', 'Ban lãnh đạo', 'Lịch sử phát triển', 'Giải thưởng'].map(item => (
                <li key={item}>
                  <Link href="#" className="text-sm text-gray-600 hover:text-viettel-red transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Business */}
          <div className="col-span-1">
            <h4 className="font-bold text-gray-900 uppercase mb-4">Lĩnh vực kinh doanh</h4>
            <ul className="space-y-3">
              {['Viễn thông', 'Giải pháp CNTT', 'Dịch vụ số', 'Nghiên cứu sản xuất'].map(item => (
                <li key={item}>
                  <Link href="#" className="text-sm text-gray-600 hover:text-viettel-red transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

           {/* Column 4: Contact */}
           <div className="col-span-1">
            <h4 className="font-bold text-gray-900 uppercase mb-4">Hỗ trợ</h4>
            <ul className="space-y-3">
              <li className="text-sm text-gray-600">Hotline: <span className="font-bold text-gray-900">1800 8098</span></li>
              <li className="text-sm text-gray-600">Email: cskh@viettel.com.vn</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
           <p>© {new Date().getFullYear()} Viettel Group. All rights reserved.</p>
           <div className="flex space-x-6 mt-4 md:mt-0">
             <Link href="#" className="hover:text-viettel-red">Điều khoản sử dụng</Link>
             <Link href="#" className="hover:text-viettel-red">Chính sách bảo mật</Link>
           </div>
        </div>
      </div>
    </footer>
  );
};
