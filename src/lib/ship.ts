import Position from "./position";
import { ClassOfShip, Orientation } from "../types/enums";
import { IShip, ICell } from "../types";

interface IProps {
  id: number;
  length: number;
  x: number;
  y: number;
}

class Ship extends Position implements IShip {
  id = -1;
  length = 0;
  life = 0;
  orientation = Orientation.Horizontal;

  constructor({ id, x, y, length }: IProps) {
    super(x, y);

    this.id = id;
    this.length = length;
    this.life = length;
  }

  get orient() {
    return this.orientation;
  }

  rotate() {
    this.orientation =
      this.orientation === Orientation.Horizontal
        ? Orientation.Vertical
        : Orientation.Horizontal;
  }

  addDamage() {
    this.life -= 1;
  }

  isDestroyed() {
    return this.life === 0;
  }

  positions() {
    const result = [];

    let xOffset = 0;
    let yOffset = 0;

    if (this.orientation === Orientation.Horizontal) {
      xOffset = 1;
    } else {
      yOffset = 1;
    }

    for (let i = 0; i < this.length; ++i) {
      const x = this.position.x + i * xOffset;
      const y = this.position.y + i * yOffset;

      result.push({ x, y });
    }

    return result;
  }

  borders() {
    const result: any[] = [];

    if (!this.isOnBoard()) return result;

    if (this.orientation === Orientation.Horizontal) {
      for (let i = 0; i < this.length; ++i) {
        result.push(
          new Position(this.position.x + i, this.position.y - 1),
          new Position(this.position.x + i, this.position.y + 1)
        );
      }

      result.push(
        new Position(this.position.x - 1, this.position.y),
        new Position(this.position.x - 1, this.position.y - 1),
        new Position(this.position.x - 1, this.position.y + 1),
        new Position(this.position.x + this.length, this.position.y),
        new Position(this.position.x + this.length, this.position.y - 1),
        new Position(this.position.x + this.length, this.position.y + 1)
      );
    } else {
      for (let i = 0; i < this.length; ++i) {
        result.push(
          new Position(this.position.x - 1, this.position.y + i),
          new Position(this.position.x + 1, this.position.y + i)
        );
      }

      result.push(
        new Position(this.position.x + 1, this.position.y - 1),
        new Position(this.position.x, this.position.y - 1),
        new Position(this.position.x - 1, this.position.y - 1),
        new Position(this.position.x + 1, this.position.y + this.length),
        new Position(this.position.x, this.position.y + this.length),
        new Position(this.position.x - 1, this.position.y + this.length)
      );
    }

    return result;
  }

  simplify() {
    return {
      id: this.id,
      orientation: this.orientation,
      x: this.position.x,
      y: this.position.y
    };
  }

  static generate() {
    return [
      new Ship({ id: 0, x: 0, y: 0, length: ClassOfShip.Submarine }),
      new Ship({ id: 1, x: 0, y: 0, length: ClassOfShip.Submarine }),
      new Ship({ id: 2, x: 0, y: 0, length: ClassOfShip.Submarine }),
      new Ship({ id: 3, x: 0, y: 0, length: ClassOfShip.Submarine }),
      new Ship({ id: 4, x: 0, y: 0, length: ClassOfShip.Destroyer }),
      new Ship({ id: 5, x: 0, y: 0, length: ClassOfShip.Destroyer }),
      new Ship({ id: 6, x: 0, y: 0, length: ClassOfShip.Destroyer }),
      new Ship({ id: 7, x: 0, y: 0, length: ClassOfShip.Cruiser }),
      new Ship({ id: 8, x: 0, y: 0, length: ClassOfShip.Cruiser }),
      new Ship({ id: 9, x: 0, y: 0, length: ClassOfShip.Battleship })
    ];
  }

  static setPositionRandomly(ship: IShip, cells: Map<string, ICell>) {
    const freeCells = Array.from(cells.values()).filter(
      (i: ICell) => !i.isFilled() && !i.isInactive()
    );

    const t = true;
    while (t) {
      const index = Math.floor(Math.random() * freeCells.length);

      ship.move(freeCells[index].position.x, freeCells[index].position.y);

      if (Ship.isPositionValid(ship, cells)) {
        break;
      } else {
        ship.rotate();
      }
    }
  }

  static isPositionValid(ship: any, cells: any) {
    const shipCells = ship.positions();

    for (let i = 0; i < shipCells.length; ++i) {
      const position = shipCells[i];
      const cell = cells.get(`${position.x}:${position.y}`);

      if (!cell || cell.isFilled() || cell.isInactive()) {
        return false;
      }
    }

    return true;
  }
}

export default Ship;
