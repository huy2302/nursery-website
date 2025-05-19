'use client'

import React, { useState } from 'react';

const Admission = () => {
  const [form, setForm] = useState({
    parentName: '',
    childName: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/admissions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const result = await response.json();
    if (response.ok) {
      alert('Thông tin đã được gửi thành công');
      setForm({ parentName: '', childName: '', phone: '', message: '' });
    } else {
      alert('Có lỗi xảy ra');
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Form Tuyển Sinh</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="parentName"
          value={form.parentName}
          onChange={handleChange}
          placeholder="Tên phụ huynh"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="childName"
          value={form.childName}
          onChange={handleChange}
          placeholder="Tên trẻ"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Số điện thoại"
          className="w-full p-2 border rounded"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Lời nhắn"
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Gửi Thông Tin
        </button>
      </form>
    </div>
  );
};

export default Admission;
