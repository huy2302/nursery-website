'use client'

import React from 'react';
import Link from 'next/link';
import Dropdown from './dropdown/Dropdown';

export default function Header() {
  const introLinks = [
    { href: '/about/facilities', label: 'Cơ sở vật chất' },
    { href: '/about/structure/leadership', label: 'Ban giám hiệu' },
    { href: '/about/structure/departments', label: 'Tổ chuyên môn' },
    { href: '/about/structure/admin', label: 'Tổ hành chính - Văn phòng' },
    { href: '/about/structure/teachers', label: 'Danh sách giáo viên' },
  ];

  const newsLinks = [
    { href: '/news/room-news', label: 'Tin tức từ phòng' },
    { href: '/news/school-news', label: 'Bản tin trường' },
    { href: '/news/notifications', label: 'Thông báo' },
  ];

  return (
    <header className="bg-orange-500 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">Trường Mầm Non Minh Tân</Link>
        </div>

        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:underline">Trang chủ</Link>
            </li>
            <Dropdown title="Giới thiệu" links={introLinks} />
            <Dropdown title="Tin tức" links={newsLinks} />
            <li>
              <Link href="/admission" className="hover:underline">Tuyển sinh</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">Liên hệ</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
