"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#f8fafc] text-gray-700 py-6 text-sm mt-10 border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 text-center space-y-2">
        <p>
          © 2018 <strong>TRƯỜNG MẦM NON HOÀNG LIỆT</strong>. Thiết kế và phát
          triển bởi <span className="text-blue-600 font-medium">EduPortal</span>
        </p>
        <p>Địa chỉ: Tổ 11A, Tứ Kỳ, Hoàng Liệt, Hoàng Mai, Hà Nội (Lô F6NT2)</p>
        <p>
          Hotline:{" "}
          <a href="tel:02438616264" className="text-blue-600 hover:underline">
            02438616264
          </a>{" "}
          &nbsp;–&nbsp; Email:{" "}
          <a
            href="mailto:mnhoangliet-hm@hanoiedu.vn"
            className="text-blue-600 hover:underline"
          >
            mnhoangliet-hm@hanoiedu.vn
          </a>
        </p>
      </div>
    </footer>
  );
}
