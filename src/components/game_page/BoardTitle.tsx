import React from "react";

interface IProps {
  isCurrent: boolean;
  content: String;
}

const BoardTitle = ({ isCurrent, content }: IProps) => {
  let className: string = "board-title";
  if (isCurrent) {
    className += " board-title--current";
  }

  return <div className={className}>{content}</div>;
};

export default BoardTitle;
