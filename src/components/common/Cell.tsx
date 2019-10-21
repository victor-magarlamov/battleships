import React from "react";

interface IProps {
  className?: string;
  x?: number;
  y?: number;
  shipId: number;
  onClick?: Function;
  isDamaged?: boolean;
  isInactive?: boolean;
  hidden?: boolean;
  isOpen?: boolean;
}

const Cell = ({
  className,
  hidden,
  x,
  y,
  shipId,
  onClick,
  isDamaged,
  isInactive,
  isOpen
}: IProps) => {
  let cellClass = "cell";

  if (className) {
    cellClass = `${cellClass} ${className}`;
  }

  if (shipId > -1 && !hidden) {
    cellClass = `${cellClass} cell--ship`;
  }

  if (isDamaged) {
    cellClass = `${cellClass} cell--damaged`;
  }

  if (!hidden && isInactive) {
    cellClass = `${cellClass} cell--inactive`;
  }

  if (isOpen) {
    cellClass = `${cellClass} cell--open`;
  }

  const handleOnClick = () => {
    if (onClick) {
      onClick(x, y);
    }
  };

  return (
    <div
      className={cellClass}
      data-x={x}
      data-y={y}
      data-shipid={shipId}
      onClick={handleOnClick}
    />
  );
};

export default Cell;
