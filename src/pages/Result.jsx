import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Result.css';

export default function Result() {
  const navigate = useNavigate();
  // 示例：胜利/淘汰动画
  return (
    <div className="result-bg">
      <div className="result-title">胜利！</div>
      <div className="result-animation">
        {/* 火柴人举手庆祝SVG */}
        <svg width="100" height="120" viewBox="0 0 100 120">
          <circle cx="50" cy="30" r="20" fill="#009688" stroke="#222" strokeWidth="2" />
          <rect x="42" y="50" width="16" height="40" fill="#009688" rx="6" />
          <line x1="50" y1="70" x2="20" y2="100" stroke="#222" strokeWidth="4" />
          <line x1="50" y1="70" x2="80" y2="100" stroke="#222" strokeWidth="4" />
          <line x1="50" y1="60" x2="30" y2="40" stroke="#222" strokeWidth="3" />
          <line x1="50" y1="60" x2="70" y2="40" stroke="#222" strokeWidth="3" />
        </svg>
      </div>
      <button className="back-btn" onClick={() => navigate('/')}>返回首页</button>
    </div>
  );
} 