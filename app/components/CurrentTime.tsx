'use client'

import { useEffect, useState } from 'react';

const dayOfWeekMap = ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];

export default function CurrentTime() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const updateTime = () => setNow(new Date());

    updateTime(); // lần đầu
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!now) return null; // tránh mismatch khi chưa có date

  const formatTime = (date: Date) => {
    const day = dayOfWeekMap[date.getDay()];
    const dd = date.getDate().toString().padStart(2, '0');
    const mm = (date.getMonth() + 1).toString().padStart(2, '0');
    const yyyy = date.getFullYear();
    const hh = date.getHours().toString().padStart(2, '0');
    const min = date.getMinutes().toString().padStart(2, '0');
    const ss = date.getSeconds().toString().padStart(2, '0');

    return `${day}, ${dd}/${mm}/${yyyy} ${hh} : ${min} : ${ss}`;
  };

  return (
    <div className="text-sm text-gray-600">
      {formatTime(now)}
    </div>
  );
}
