import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-bg">
      <div className="home-title">统计大师<br /><span>职场火柴人卡牌对战</span></div>
      <div className="home-animation">
        {/* 火柴人主管怒吼SVG动画 */}
        <svg width="120" height="120" viewBox="0 0 120 120">
          <circle cx="60" cy="40" r="20" fill="#e74c3c" stroke="#222" strokeWidth="2" />
          <rect x="50" y="60" width="20" height="40" fill="#222" rx="8" />
          <line x1="60" y1="80" x2="40" y2="110" stroke="#222" strokeWidth="4" />
          <line x1="60" y1="80" x2="80" y2="110" stroke="#222" strokeWidth="4" />
          <line x1="60" y1="70" x2="45" y2="90" stroke="#222" strokeWidth="3" />
          <line x1="60" y1="70" x2="75" y2="90" stroke="#222" strokeWidth="3" />
          <text x="60" y="30" textAnchor="middle" fontSize="12" fill="#fff">主管</text>
        </svg>
      </div>
      <button className="start-btn" onClick={() => navigate('/game')}>开始游戏</button>
      <div className="home-desc">精准还原职场讽刺，体验KPI与审计的双重压力！</div>
    </div>
  );
} 