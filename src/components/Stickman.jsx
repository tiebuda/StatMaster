import React from 'react';

export default function Stickman({ color = '#222', mood = 'normal', size = 60, label }) {
  // mood: normal, angry, happy
  return (
    <svg width={size} height={size * 1.5} viewBox="0 0 60 90">
      {/* 头部 */}
      <circle cx="30" cy="20" r="18" fill={color} stroke="#222" strokeWidth="2" />
      {/* 身体 */}
      <rect x="22" y="38" width="16" height="32" fill={color} rx="6" />
      {/* 手臂 */}
      <line x1="30" y1="50" x2="8" y2="70" stroke="#222" strokeWidth="4" />
      <line x1="30" y1="50" x2="52" y2="70" stroke="#222" strokeWidth="4" />
      {/* 腿 */}
      <line x1="30" y1="70" x2="12" y2="88" stroke="#222" strokeWidth="4" />
      <line x1="30" y1="70" x2="48" y2="88" stroke="#222" strokeWidth="4" />
      {/* 表情 */}
      {mood === 'angry' && <ellipse cx="30" cy="20" rx="10" ry="6" fill="none" stroke="#fff" strokeWidth="2" />}
      {mood === 'happy' && <ellipse cx="30" cy="28" rx="8" ry="4" fill="none" stroke="#fff" strokeWidth="2" />}
      {/* 标签 */}
      {label && <text x="30" y="12" textAnchor="middle" fontSize="10" fill="#fff">{label}</text>}
    </svg>
  );
} 