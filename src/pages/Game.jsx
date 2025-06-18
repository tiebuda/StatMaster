import React from 'react';
import './Game.css';
import Stickman from '../components/Stickman';
import OfficeScene from '../components/OfficeScene';
import Card from '../components/Card';
import { cards } from '../utils/cards';

export default function Game() {
  // 示例：2名玩家
  const playerA = { name: '你', color: '#222', kpi: 80, risk: 20 };
  const playerB = { name: '对手B', color: '#607d8b', kpi: 85, risk: 15 };
  return (
    <div className="game-bg">
      {/* 职场场景背景 */}
      <div className="scene-bg">
        <OfficeScene />
        <div style={{ position: 'absolute', left: 60, top: 60 }}>
          <Stickman color={playerA.color} label={playerA.name} />
        </div>
        <div style={{ position: 'absolute', right: 60, top: 60 }}>
          <Stickman color={playerB.color} label={playerB.name} />
        </div>
      </div>
      {/* 玩家面板 */}
      <div className="players-panel">
        <div className="player-card self">{playerA.name}<br/>KPI: {playerA.kpi}%<br/>风险: {playerA.risk}%</div>
        <div className="player-card">{playerB.name}<br/>KPI: {playerB.kpi}%<br/>风险: {playerB.risk}%</div>
      </div>
      {/* 卡牌区（示例3张） */}
      <div className="card-zone">
        {cards.slice(0,3).map(card => (
          <Card key={card.name} {...card} />
        ))}
      </div>
      {/* 回合信息 */}
      <div className="turn-info">第1回合 · 你的回合</div>
    </div>
  );
} 