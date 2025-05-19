'use client';

import React, { useEffect, useState } from 'react';

export default function ScrollingText() {
  const [texts, setTexts] = useState<string[]>([]);

  useEffect(() => {
    const fetchTexts = async () => {
      try {
        const res = await fetch('/api/messages');
        const data = await res.json();
        setTexts(data);
      } catch (err) {
        console.error('Failed to fetch messages', err);
      }
    };

    fetchTexts();
  }, []);

  if (texts.length === 0) return null; // or a loading spinner

  return (
    <div className="w-full overflow-hidden bg-yellow-100 py-2 border-y border-yellow-300">
      <div className="whitespace-nowrap animate-marquee flex gap-20">
        {[...texts, ...texts].map((text, idx) => (
          <span key={idx} className="text-sm font-medium text-yellow-800">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
