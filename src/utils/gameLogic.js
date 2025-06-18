// 玩家状态结构
export function createPlayer(name, color) {
  return {
    name,
    color,
    kpi: 80 + Math.floor(Math.random() * 10), // 初始KPI 80-90
    risk: 10 + Math.floor(Math.random() * 15), // 初始风险10-25
    cards: [],
    alive: true,
  };
}

// 游戏状态结构
export function createGame(players) {
  return {
    players,
    turn: 1,
    current: 0, // 当前玩家索引
    deck: [],
    discard: [],
    phase: 'action', // action/audit/result
  };
}

// 卡牌效果处理（待完善）
export function applyCardEffect(game, playerIdx, card) {
  // TODO: 根据卡牌类型和描述处理效果
} 