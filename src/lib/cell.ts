import Position from "./position";
import { BATTLEFIELD_SIZE } from "../constants";
import { CellStates } from "../types/enums";
import { ICell, IShip } from "../types";

class Cell extends Position implements ICell {
  currentShipId = -1;
  currentState = CellStates.Empty;

  get state() {
    return this.currentState;
  }

  get shipId() {
    return this.currentShipId;
  }

  set state(value: CellStates) {
    this.currentState = value;
  }

  set shipId(value: number) {
    this.currentShipId = value;
  }

  isFilled(): boolean {
    return this.shipId !== -1;
  }

  isInactive(): boolean {
    return this.state === CellStates.Inactive;
  }

  isOpen(): boolean {
    return this.state === CellStates.Open;
  }

  isDamaged(): boolean {
    return (
      this.state === CellStates.Injured || this.state === CellStates.Destroyed
    );
  }

  static generate = () => {
    const result = new Map();

    for (let y = 1; y < BATTLEFIELD_SIZE + 1; ++y) {
      for (let x = 1; x < BATTLEFIELD_SIZE + 1; ++x) {
        result.set(`${x}:${y}`, new Cell(x, y));
      }
    }

    return result;
  };

  static resetCells = (cells: Map<string, ICell>) => {
    cells.forEach((cell: ICell) => {
      cell.shipId = -1;
      cell.state = CellStates.Empty;
    });
  };

  static updateCells = (cells: Map<string, ICell>, ships: IShip[]) => {
    for (let i = 0; i < ships.length; ++i) {
      for (const position of ships[i].positions()) {
        const cell = cells.get(`${position.x}:${position.y}`);

        if (cell) {
          cell.shipId = ships[i].id;
        }
      }

      for (const position of ships[i].borders()) {
        const cell = cells.get(position.key);

        if (cell) {
          cell.state = CellStates.Inactive;
        }
      }
    }
  };
}

export default Cell;
