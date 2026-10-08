import React from 'react';

export const MintLeaf: React.FC<{ className?: string; size?: number }> = ({ className = 'w-7 h-7', size = 28 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="100" height="100" rx="20" fill="#F5F7FA" />
    <path d="M75 25C40 25 25 45 25 75C25 78 28 80 31 80C61 80 75 65 75 25Z" fill="#3EB489" />
    <path d="M30 75C42 63 54 51 70 30" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M42 63L48 69" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="48" cy="69" r="3" fill="#FFFFFF" />
    <path d="M54 51L64 56" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="64" cy="56" r="3" fill="#FFFFFF" />
    <path d="M62 39L70 45" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="70" cy="45" r="3" fill="#FFFFFF" />
  </svg>
);

export default MintLeaf;
