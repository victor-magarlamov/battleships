import { ClassOfShip } from "./../types/enums";

export const BATTLEFIELD_SIZE = 10;
export const TOTAL_SHIPS_COUNT = 10;

export const LABELS_OF_SHIP: { [key: string]: string } = {
  [ClassOfShip.Submarine]: "submarine",
  [ClassOfShip.Destroyer]: "destroyer",
  [ClassOfShip.Cruiser]: "cruiser",
  [ClassOfShip.Battleship]: "battleship"
};
