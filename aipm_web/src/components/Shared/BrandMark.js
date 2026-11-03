import React from "react";

let uid = 0;

function BrandMark() {
  const id = React.useMemo(() => `aipm-brand-grad-${uid++}`, []);
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24 4C21 14 16 18 10 22c4 1.5 8 4.5 11 9.5 1 1.7 2 4 3 7 1-3 2-5.3 3-7 3-5 7-8 11-9.5-6-4-11-8-14-18Z"
        fill={`url(#${id})`}
      />
      <path d="M24 20v15M18.5 27h11" stroke="#0B2436" strokeWidth="2.4" strokeLinecap="round" />
      <defs>
        <linearGradient id={id} x1="10" y1="4" x2="38" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E7CE8F" />
          <stop offset="1" stopColor="#C89B3C" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default BrandMark;
