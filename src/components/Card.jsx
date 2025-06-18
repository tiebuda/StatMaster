import React from 'react';

const typeColor = {
  positive: '#4caf50', // 正向卡
  sample: '#ffb300',   // 抽样卡
  spy: '#e53935',      // 谍报卡
  safe: '#009688',     // 保命卡
};

export default function Card({ type = 'positive', name, desc }) {
  return (
    <div className="card-svg-wrap">
      <svg width="80" height="110" viewBox="0 0 80 110">
        <rect x="6" y="6" width="68" height="98" rx="12" fill={typeColor[type]} stroke="#222" strokeWidth="2" />
        <text x="40" y="28" textAnchor="middle" fontSize="16" fill="#fff" fontWeight="bold">{name}</text>
        <text x="40" y="60" textAnchor="middle" fontSize="12" fill="#fff">{desc}</text>
      </svg>
    </div>
  );
} 