"use client";
import React from 'react';
import { Button } from './Button';

export const ContactForm: React.FC = () => {
  return (
    <form className="max-w-4xl mx-auto p-8 bg-white" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Left Column */}
        <div className="space-y-6">
            <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Chủ đề <span className="text-viettel-red">*</span></label>
                <select className="w-full bg-[#F2F2F2] border-none p-4 text-gray-700 outline-none focus:ring-1 focus:ring-viettel-red">
                    <option>Hãy chọn chủ đề mà bạn muốn phản hồi</option>
                    <option>Tư vấn dịch vụ</option>
                    <option>Hợp tác kinh doanh</option>
                    <option>Tuyển dụng</option>
                </select>
            </div>
            <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Tên <span className="text-viettel-red">*</span></label>
                <input 
                    type="text" 
                    className="w-full bg-[#F2F2F2] border-none p-4 text-gray-700 outline-none focus:ring-1 focus:ring-viettel-red"
                />
            </div>
            <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">E-mail <span className="text-viettel-red">*</span></label>
                <input 
                    type="email" 
                    className="w-full bg-[#F2F2F2] border-none p-4 text-gray-700 outline-none focus:ring-1 focus:ring-viettel-red"
                />
            </div>
             <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Đính kèm file</label>
                <button className="border border-viettel-red text-viettel-red px-6 py-2 text-xs font-bold uppercase rounded-full hover:bg-viettel-red hover:text-white transition-colors" style={{ borderRadius: '9999px' }}>
                    Chọn File
                </button>
            </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6 flex flex-col">
            <div className="flex-grow flex flex-col">
                <label className="block text-sm font-bold text-gray-900 mb-2">Câu hỏi/Phản hồi của bạn <span className="text-viettel-red">*</span></label>
                <textarea 
                    rows={6}
                    className="w-full bg-[#F2F2F2] border-none p-4 text-gray-700 outline-none focus:ring-1 focus:ring-viettel-red flex-grow resize-none"
                ></textarea>
            </div>
             <div>
                <Button 
                    className="rounded-full px-10"
                    style={{ borderRadius: '9999px' }}
                >
                    Gửi
                </Button>
            </div>
        </div>
      </div>
      
      <div className="text-xs text-gray-500 mt-4">
        <p className="font-bold mb-1">File phải nhỏ hơn 5MB</p>
        <p>Các file hợp lệ: gif, jpg, jpeg, png, pdf, doc, docx, ppt, pptx, xls, xlsx, avi, mov, mp3, rar và zip</p>
      </div>
    </form>
  );
};
