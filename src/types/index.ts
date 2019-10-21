import { Orientation, CellStates } from "./enums";

export type Ship = {
  id: number;
  x: number;
  y: number;
  orientation: Orientation;
};

export type Cursor = {
  shipId: Function;
  move: Function;
};

export interface IPosition {
  position: { x: number; y: number };
  key: string;
  move: Function;
  reset: Function;
  isOnBoard: Function;
}

export interface ICell extends IPosition {
  shipId: number;
  state: CellStates;
  isDamaged: Function;
  isInactive: Function;
  isOpen: Function;
  isFilled: Function;
}

export interface IShip extends IPosition {
  id: number;
  length: number;
  orient: Orientation;
  positions: Function;
  borders: Function;
  rotate: Function;
  addDamage: Function;
  isDestroyed: Function;
  simplify: Function;
}
