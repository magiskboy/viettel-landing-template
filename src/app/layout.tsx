import type { Metadata } from "next";
import { Sarabun } from "next/font/google";
import "./globals.css";

const sarabun = Sarabun({
  variable: "--font-sarabun",
  subsets: ["vietnamese", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"], // Load multiple weights for design flexibility
});

export const metadata: Metadata = {
  title: "Viettel Landing Template",
  description: "Template chuẩn branding Viettel cho các chiến dịch quảng cáo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${sarabun.variable} antialiased`}>{children}</body>
    </html>
  );
}
