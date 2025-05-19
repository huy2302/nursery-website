'use client';

import React from 'react';

const texts = [
  '🎉 Chào mừng đến với trường mầm non Hoàng Liệt!',
  '📢 Tuyển sinh năm học 2025 - 2026 đã bắt đầu!',
  '🔔 Theo dõi fanpage để nhận thông tin mới nhất!',
  '📞 Liên hệ: 02438616264 để được tư vấn.',
];

export default function ScrollingText() {
  return (
    <div className="w-full overflow-hidden bg-yellow-100 py-2 border-y border-yellow-300">
      <div className="inline-block whitespace-nowrap animate-marquee text-yellow-800 font-medium text-sm">
        {texts.map((text, idx) => (
          <span key={idx} className="mx-10">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
