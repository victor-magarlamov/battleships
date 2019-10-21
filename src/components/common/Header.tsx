import React from "react";

interface IProps {
  as: string;
  content: string;
  color?: string;
}

const Header = ({ as, content, color = "white" }: IProps) => {
  return (
    <div
      style={{ color: color }}
      dangerouslySetInnerHTML={{
        __html: `<${as}>${content}</${as}>`
      }}
    />
  );
};

export default Header;
