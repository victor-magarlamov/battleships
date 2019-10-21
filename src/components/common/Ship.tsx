import React from "react";
import Cell from "./Cell";
import { IShip } from "../../types";

interface IProps {
  ship: IShip | null;
  isSelected?: boolean;
}

const Ship = ({ ship, isSelected }: IProps) => {
  if (!ship) return null;

  let className = `ship ship--${ship.orient}`;

  if (isSelected) {
    className += " ship--current";
  }

  return (
    <div className={className} data-id={ship.id}>
      {ship.positions().map((i: IShip, index: number) => (
        <Cell
          key={`${ship.id}-${index}`}
          shipId={ship.id}
          isInactive={ship.isOnBoard()}
        />
      ))}
    </div>
  );
};

export default Ship;
