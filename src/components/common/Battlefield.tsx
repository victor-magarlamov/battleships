import React from "react";
import Cell from "./Cell";
import { ICell } from "../../types";

interface IProps {
  cells: Map<string, ICell>;
  hidden?: boolean;
  onCellClick?: Function;
}

const Battlefield = ({ cells, hidden, onCellClick }: IProps) => {
  return (
    <div className="board">
      {Array.from(cells.values()).map((cell: ICell) => (
        <Cell
          key={cell.key}
          className="field"
          hidden={hidden}
          x={cell.position.x}
          y={cell.position.y}
          shipId={cell.shipId}
          onClick={onCellClick}
          isDamaged={cell.isDamaged()}
          isInactive={cell.isInactive()}
          isOpen={cell.isOpen()}
        />
      ))}
    </div>
  );
};

export default Battlefield;
