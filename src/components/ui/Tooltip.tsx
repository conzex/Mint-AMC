'use client';

import React, { useState } from 'react';

export default function Tooltip({ text, children }: { text: string; children: React.ReactNode }) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative inline-block" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      {show && (
        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2.5 py-1 text-xs font-medium text-white bg-dark-navy rounded shadow-md whitespace-nowrap z-50">
          {text}
        </div>
      )}
    </div>
  );
}
