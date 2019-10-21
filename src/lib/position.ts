import { IPosition } from "../types";

class Position implements IPosition {
  x: number = 0;
  y: number = 0;
  prevPosition: { x: number; y: number } = { x: 0, y: 0 };

  constructor(x: number, y: number) {
    this.move(x, y);
  }

  get position() {
    return { x: this.x, y: this.y };
  }

  get key() {
    return `${this.x}:${this.y}`;
  }

  move(x: number, y: number) {
    this.prevPosition = { x, y };
    this.x = x;
    this.y = y;
  }

  reset() {
    this.x = this.prevPosition.x;
    this.y = this.prevPosition.y;
  }

  isOnBoard() {
    return this.x > 0 && this.y > 0;
  }
}

export default Position;
