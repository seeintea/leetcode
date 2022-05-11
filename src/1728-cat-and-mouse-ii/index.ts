/**
 * https://leetcode.cn/problems/cat-and-mouse-ii/
 * Cat and Mouse II
 * A game is played by a cat and a mouse named Cat and Mouse.
 * The environment is represented by a grid of size rows x cols, where each element is a wall, floor, player (Cat, Mouse), or food.
 * Players are represented by the characters 'C'(Cat),'M'(Mouse).
 * Floors are represented by the character '.' and can be walked on.
 * Walls are represented by the character '#' and cannot be walked on.
 * Food is represented by the character 'F' and can be walked on.
 * There is only one of each character 'C', 'M', and 'F' in grid.
 * Mouse and Cat play according to the following rules:
 * Mouse moves first, then they take turns to move.
 * During each turn, Cat and Mouse can jump in one of the four directions (left, right, up, down). They cannot jump over the wall nor outside of the grid.
 * catJump, mouseJump are the maximum lengths Cat and Mouse can jump at a time, respectively. Cat and Mouse can jump less than the maximum length.
 * Staying in the same position is allowed.
 * Mouse can jump over Cat.
 * The game can end in 4 ways:
 * If Cat occupies the same position as Mouse, Cat wins.
 * If Cat reaches the food first, Cat wins.
 * If Mouse reaches the food first, Mouse wins.
 * If Mouse cannot get to the food within 1000 turns, Cat wins.
 * Given a rows x cols matrix grid and two integers catJump and mouseJump, return true if Mouse can win the game if both Cat and Mouse play optimally, otherwise return false.
 */

const MOUSE_TURN = 0;
const CAT_TURN = 1;
const UNKNOWN = 0;
const MOUSE_WIN = 1;
const CAT_WIN = 2;
const MAX_MOVES = 1000;
const dirs = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function canMouseWin(grid: string[], catJump: number, mouseJump: number): boolean {
  const rows = grid.length;
  const cols = grid[0].length;
  let startMouse = -1;
  let startCat = -1;
  let food = -1;

  const getCurPosition = (row: number, col: number): number => {
    return row * cols + col;
  };

  const getPrevStates = (mouse: number, cat: number, turn: number) => {
    const prevStates = [];
    const mouseRow = Math.floor(mouse / cols),
      mouseCol = mouse % cols;
    const catRow = Math.floor(cat / cols),
      catCol = cat % cols;
    const prevTurn = turn === MOUSE_TURN ? CAT_TURN : MOUSE_TURN;
    const maxJump = prevTurn === MOUSE_TURN ? mouseJump : catJump;
    const startRow = prevTurn === MOUSE_TURN ? mouseRow : catRow;
    const startCol = prevTurn === MOUSE_TURN ? mouseCol : catCol;
    prevStates.push([mouse, cat, prevTurn]);
    for (const dir of dirs) {
      for (
        let i = startRow + dir[0], j = startCol + dir[1], jump = 1;
        i >= 0 && i < rows && j >= 0 && j < cols && grid[i].charAt(j) !== "#" && jump <= maxJump;
        i += dir[0], j += dir[1], jump++
      ) {
        const prevMouseRow = prevTurn === MOUSE_TURN ? i : mouseRow;
        const prevMouseCol = prevTurn === MOUSE_TURN ? j : mouseCol;
        const prevCatRow = prevTurn === MOUSE_TURN ? catRow : i;
        const prevCatCol = prevTurn === MOUSE_TURN ? catCol : j;
        const prevMouse = getCurPosition(prevMouseRow, prevMouseCol);
        const prevCat = getCurPosition(prevCatRow, prevCatCol);
        prevStates.push([prevMouse, prevCat, prevTurn]);
      }
    }
    return prevStates;
  };

  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      const c = grid[i][j];
      if (c === "M") {
        startMouse = getCurPosition(i, j);
      } else if (c === "C") {
        startCat = getCurPosition(i, j);
      } else if (c === "F") {
        food = getCurPosition(i, j);
      }
    }
  }
  const total = rows * cols;
  const degrees = new Array(total).fill(0).map(() => new Array(total).fill(0).map(() => new Array(2).fill(0)));
  const results = new Array(total)
    .fill(0)
    .map(() => new Array(total).fill(0).map(() => new Array(2).fill(0).map(() => new Array(2).fill(0))));
  const queue = [];
  // 计算每个状态的度
  for (let mouse = 0; mouse < total; mouse++) {
    const mouseRow = Math.floor(mouse / cols);
    const mouseCol = mouse % cols;
    if (grid[mouseRow][mouseCol] === "#") {
      continue;
    }
    for (let cat = 0; cat < total; cat++) {
      const catRow = Math.floor(cat / cols);
      const catCol = cat % cols;
      if (grid[catRow][catCol] === "#") {
        continue;
      }
      degrees[mouse][cat][MOUSE_TURN]++;
      degrees[mouse][cat][CAT_TURN]++;
      for (const dir of dirs) {
        for (
          let row = mouseRow + dir[0], col = mouseCol + dir[1], jump = 1;
          row >= 0 && row < rows && col >= 0 && col < cols && grid[row][col] !== "#" && jump <= mouseJump;
          row += dir[0], col += dir[1], jump++
        ) {
          const nextMouse = getCurPosition(row, col),
            nextCat = getCurPosition(catRow, catCol);
          degrees[nextMouse][nextCat][MOUSE_TURN]++;
        }
        for (
          let row = catRow + dir[0], col = catCol + dir[1], jump = 1;
          row >= 0 && row < rows && col >= 0 && col < cols && grid[row][col] !== "#" && jump <= catJump;
          row += dir[0], col += dir[1], jump++
        ) {
          const nextMouse = getCurPosition(mouseRow, mouseCol),
            nextCat = getCurPosition(row, col);
          degrees[nextMouse][nextCat][CAT_TURN]++;
        }
      }
    }
  }
  // 猫和老鼠在同一个单元格，猫获胜
  for (let pos = 0; pos < total; pos++) {
    const row = Math.floor(pos / cols),
      col = pos % cols;
    if (grid[row][col] === "#") {
      continue;
    }
    results[pos][pos][MOUSE_TURN][0] = CAT_WIN;
    results[pos][pos][MOUSE_TURN][1] = 0;
    results[pos][pos][CAT_TURN][0] = CAT_WIN;
    results[pos][pos][CAT_TURN][1] = 0;
    queue.push([pos, pos, MOUSE_TURN]);
    queue.push([pos, pos, CAT_TURN]);
  }
  // 猫和食物在同一个单元格，猫获胜
  for (let mouse = 0; mouse < total; mouse++) {
    const mouseRow = Math.floor(mouse / cols),
      mouseCol = mouse % cols;
    if (grid[mouseRow][mouseCol] === "#" || mouse === food) {
      continue;
    }
    results[mouse][food][MOUSE_TURN][0] = CAT_WIN;
    results[mouse][food][MOUSE_TURN][1] = 0;
    results[mouse][food][CAT_TURN][0] = CAT_WIN;
    results[mouse][food][CAT_TURN][1] = 0;
    queue.push([mouse, food, MOUSE_TURN]);
    queue.push([mouse, food, CAT_TURN]);
  }
  // 老鼠和食物在同一个单元格且猫和食物不在同一个单元格，老鼠获胜
  for (let cat = 0; cat < total; cat++) {
    const catRow = Math.floor(cat / cols),
      catCol = cat % cols;
    if (grid[catRow][catCol] === "#" || cat === food) {
      continue;
    }
    results[food][cat][MOUSE_TURN][0] = MOUSE_WIN;
    results[food][cat][MOUSE_TURN][1] = 0;
    results[food][cat][CAT_TURN][0] = MOUSE_WIN;
    results[food][cat][CAT_TURN][1] = 0;
    queue.push([food, cat, MOUSE_TURN]);
    queue.push([food, cat, CAT_TURN]);
  }
  // 拓扑排序
  while (queue.length) {
    const state = queue.shift()!;
    const mouse = state[0],
      cat = state[1],
      turn = state[2];
    const result = results[mouse][cat][turn][0];
    const moves = results[mouse][cat][turn][1];
    const prevStates = getPrevStates(mouse, cat, turn);
    for (const prevState of prevStates) {
      const prevMouse = prevState[0],
        prevCat = prevState[1],
        prevTurn = prevState[2];
      if (results[prevMouse][prevCat][prevTurn][0] === UNKNOWN) {
        const canWin =
          (result === MOUSE_WIN && prevTurn === MOUSE_TURN) || (result === CAT_WIN && prevTurn === CAT_TURN);
        if (canWin) {
          results[prevMouse][prevCat][prevTurn][0] = result;
          results[prevMouse][prevCat][prevTurn][1] = moves + 1;
          queue.push([prevMouse, prevCat, prevTurn]);
        } else {
          degrees[prevMouse][prevCat][prevTurn]--;
          if (degrees[prevMouse][prevCat][prevTurn] === 0) {
            results[prevMouse][prevCat][prevTurn][0] = prevTurn === MOUSE_TURN ? CAT_WIN : MOUSE_WIN;
            results[prevMouse][prevCat][prevTurn][1] = moves + 1;
            queue.push([prevMouse, prevCat, prevTurn]);
          }
        }
      }
    }
  }

  return (
    results[startMouse][startCat][MOUSE_TURN][0] === MOUSE_WIN &&
    results[startMouse][startCat][MOUSE_TURN][1] <= MAX_MOVES
  );
}

export default canMouseWin;
