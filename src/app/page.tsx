import React from 'react';
import LandingContent from './LandingContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trang chủ | Viettel Telecom',
  description: 'Tiên phong chủ lực kiến tạo xã hội số',
};

export default function LandingTemplate() {
  return <LandingContent />;
}
