'use client'

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './Dropdown.module.css';
import clsx from 'clsx';

interface DropdownProps {
  title: string;
  links: { href: string; label: string }[];
}

const Dropdown: React.FC<DropdownProps> = ({ title, links }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // We explicitly set the type of the ref to HTMLUListElement to avoid TypeScript errors
  const dropdownRef = useRef<HTMLUListElement | null>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // TypeScript now knows dropdownRef.current is a valid DOM node with the 'contains' method
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <li className="relative">
      <button
        className={clsx(
          'focus:outline-none hover:underline',
          styles.customItemHeader
        )}
        onClick={toggleDropdown}
      >
        {title}
      </button>
      {isDropdownOpen && (
        <ul ref={dropdownRef} className="absolute bg-white text-black shadow-lg rounded py-2 w-48 mt-2 z-10">
          {links.map((link) => (
            <li key={link.href} className="px-4 py-2 hover:bg-gray-100">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Dropdown;
