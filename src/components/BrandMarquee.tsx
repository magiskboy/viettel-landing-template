"use client";

import React from "react";
import { motion } from "framer-motion";

export const BrandMarquee = () => {
    const brandPhrases = [
        "TIÊN PHONG CHỦ LỰC",
        "KIẾN TẠO XÃ HỘI SỐ",
        "CÔNG NGHỆ TỪ TRÁI TIM",
        "KHÁCH HÀNG LÀ TRUNG TÂM",
        "VƯƠN TẦM THẾ GIỚI",
        "VIETTEL 4.0",
    ];

    return (
        <div className="bg-gray-50 py-4 border-y border-gray-200 overflow-hidden select-none">
            <motion.div
                className="flex whitespace-nowrap gap-12"
                animate={{
                    x: [0, -1000],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex gap-12 items-center">
                        {brandPhrases.map((phrase, idx) => (
                            <span 
                                key={idx} 
                                className="text-sm font-bold tracking-widest text-[#ee0033]/30 uppercase"
                            >
                                {phrase}
                            </span>
                        ))}
                    </div>
                ))}
            </motion.div>
        </div>
    );
};
