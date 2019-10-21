import Cell from "./cell";
import Position from "./position";
import { ICell } from "../types";
import { CellStates } from "../types/enums";

function createNahimov() {
  const enemyPositions: Map<string, ICell> = Cell.generate();
  let potentionalTargets: Position[] = [];
  let luckyShots: Position[] = [];

  function getTargetKey() {
    if (potentionalTargets.length > 0) {
      return potentionalTargets.shift()!.key;
    }

    const cells = getAvailableCells(enemyPositions);
    const randomIndex = getRandomTarget(cells.length);

    return cells[randomIndex].key;
  }

  function setResult(position: { x: number; y: number }, result: CellStates) {
    enemyPositions.get(`${position.x}:${position.y}`)!.state = result;

    if (result === CellStates.Injured) {
      luckyShots.push(new Position(position.x, position.y));
      setPotentionalTargets(position);
    } else if (result === CellStates.Destroyed) {
      potentionalTargets = [];
      luckyShots = [];
    }
  }

  function setPotentionalTargets(position: { x: number; y: number }) {
    const arr = new Map();

    if (luckyShots.length > 1) {
      potentionalTargets = [];

      const xPositions = luckyShots.map(p => p.x).sort((a, b) => +a - +b);
      const yPositions = luckyShots.map(p => p.y).sort((a, b) => +a - +b);

      const uniqX = new Set(xPositions);

      if (uniqX.size === 1) {
        const lo = yPositions.shift() || position.y;
        const hi = yPositions.pop() || position.y;

        arr.set(0, new Position(position.x, lo - 1));
        arr.set(1, new Position(position.x, hi + 1));
      } else {
        const lo = xPositions.shift() || position.x;
        const hi = xPositions.pop() || position.x;

        arr.set(0, new Position(lo - 1, position.y));
        arr.set(1, new Position(hi + 1, position.y));
      }
    } else {
      arr.set(0, new Position(position.x + 1, position.y));
      arr.set(1, new Position(position.x - 1, position.y));
      arr.set(2, new Position(position.x, position.y + 1));
      arr.set(3, new Position(position.x, position.y - 1));
    }

    arr.forEach((value: Position, key: number) => {
      if (
        !enemyPositions.get(value.key) ||
        enemyPositions.get(value.key)!.isOpen() ||
        enemyPositions.get(value.key)!.isDamaged()
      ) {
        arr.delete(key);
      }
    });

    potentionalTargets = [...potentionalTargets, ...Array.from(arr.values())];
  }

  function openCells(positions: Position[]) {
    for (const i of positions) {
      const pos = enemyPositions.get(i.key);
      if (pos) {
        pos.state = CellStates.Open;
      }
    }
  }

  return Object.freeze({
    getTargetKey,
    setResult,
    openCells
  });
}

function getAvailableCells(cells: Map<string, ICell>) {
  return Array.from(cells.values()).filter(i => !i.isOpen() && !i.isDamaged());
}

function getRandomTarget(total: number) {
  return Math.floor(Math.random() * total);
}

export { createNahimov };
