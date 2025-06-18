import React from 'react';

export default function OfficeScene({ width = 400, height = 180 }) {
  return (
    <svg width={width} height={height} viewBox="0 0 400 180">
      {/* 会议桌 */}
      <rect x="60" y="120" width="280" height="30" rx="15" fill="#b0bec5" />
      {/* KPI大屏 */}
      <rect x="140" y="20" width="120" height="40" rx="8" fill="#009688" stroke="#222" strokeWidth="2" />
      <text x="200" y="45" textAnchor="middle" fontSize="18" fill="#fff">KPI</text>
      {/* 工位 */}
      <rect x="80" y="90" width="40" height="18" rx="4" fill="#fffde7" stroke="#bdbdbd" />
      <rect x="280" y="90" width="40" height="18" rx="4" fill="#fffde7" stroke="#bdbdbd" />
      {/* 文件夹/打印机等小物件 */}
      <rect x="100" y="100" width="12" height="8" fill="#ffe082" stroke="#bdbdbd" />
      <rect x="300" y="100" width="14" height="8" fill="#b3e5fc" stroke="#bdbdbd" />
    </svg>
  );
} 