export enum Pages {
  Settings = "settings",
  Game = "game"
}

export enum Orientation {
  Horizontal = "horizontal",
  Vertical = "vertical"
}

export enum ClassOfShip {
  Submarine = 1,
  Destroyer = 2,
  Cruiser = 3,
  Battleship = 4
}

export enum CellStates {
  Empty = 0,
  Filled = 1,
  Injured = 2,
  Destroyed = 3,
  Inactive = 4,
  Open = 5
}

export enum Players {
  One = 1,
  Two = 2
}

export enum GameStates {
  Over = 0,
  Play = 1
}
