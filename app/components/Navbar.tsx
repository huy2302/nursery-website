// components/Navbar.tsx
'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-orange-500 text-white p-4">
      <ul className="flex space-x-6">
        <li><Link href="/">Trang chủ</Link></li>
        <li
          className="relative group"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <button className="focus:outline-none">Giới thiệu</button>
          {open && (
            <ul className="absolute top-full left-0 bg-white text-black shadow rounded py-2 w-64">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/about/facilities">Cơ sở vật chất</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/about/structure/leadership">Ban giám hiệu</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/about/structure/departments">Tổ chuyên môn</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/about/structure/admin">Hành chính – Văn phòng</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/about/structure/teachers">Danh sách giáo viên</Link>
              </li>
            </ul>
          )}
        </li>
        <li><Link href="/admission">Tuyển sinh</Link></li>
        <li><Link href="/posts">Tin tức</Link></li>
        <li><Link href="/contact">Liên hệ</Link></li>
      </ul>
    </nav>
  );
}
