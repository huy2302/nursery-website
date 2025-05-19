// app/api/messages/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const texts = [
    '🎉 Chào mừng đến với trường mầm non Hoàng Liệt!',
    '📢 Tuyển sinh năm học 2025 - 2026 đã bắt đầu!',
    '🔔 Theo dõi fanpage để nhận thông tin mới nhất!',
    '📞 Liên hệ: 02438616264 để được tư vấn.',
  ];

  return NextResponse.json(texts);
}
