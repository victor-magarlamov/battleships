import React from "react";
import { Players } from "../../types/enums";
import Header from "../common/Header";

interface IProps {
  onClick: any;
  winner: Players;
}

const GameResult = ({ onClick, winner }: IProps) => {
  const message =
    winner === Players.One
      ? "Salute! You win!"
      : "Sorry admiral! Your flotilla was destroyed";

  return (
    <div className="game-result">
      <Header as="h3" color="blue" content={message} />
      <button onClick={onClick}>Replay</button>
    </div>
  );
};

export default GameResult;
