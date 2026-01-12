"use client";

import React from "react";

export const AmbientGlow = () => {
    return (
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
            <style jsx>{`
                @keyframes float-1 {
                    0%, 100% { transform: translate(0, 0); }
                    33% { transform: translate(20%, -15%); }
                    66% { transform: translate(-10%, 10%); }
                }
                @keyframes float-2 {
                    0%, 100% { transform: translate(0, 0); }
                    33% { transform: translate(-25%, 20%); }
                    66% { transform: translate(15%, -10%); }
                }
                .glow-1 {
                    animation: float-1 25s infinite ease-in-out;
                }
                .glow-2 {
                    animation: float-2 35s infinite ease-in-out;
                }
            `}</style>
            <div
                className="glow-1 absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] bg-red-100/30 rounded-full blur-[120px]"
            />
            <div
                className="glow-2 absolute top-[40%] -right-[15%] w-[50vw] h-[50vw] bg-gray-200/40 rounded-full blur-[100px]"
            />
        </div>
    );
};

