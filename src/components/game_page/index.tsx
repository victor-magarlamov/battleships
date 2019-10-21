import React, { Component } from "react";
import { connect } from "react-redux";
import { resetDisposition } from "../../actions/disposition";
import Cell from "../../lib/cell";
import Ship from "../../lib/ship";
import { createNahimov } from "../../lib/nahimov";
import Battlefield from "../common/Battlefield";
import Header from "../common/Header";
import BoardTitle from "./BoardTitle";
import GameResult from "./GameResult";
import { TOTAL_SHIPS_COUNT } from "../../constants";
import { IShip, ICell } from "../../types";
import {
  CellStates,
  Players,
  Orientation,
  GameStates
} from "../../types/enums";

interface IProps {
  disposition: any[];
  resetDisposition: Function;
}

interface IState {
  gameState: GameStates;
  currentPlayer: Players;
  playerOneCells: Map<string, ICell>;
  playerTwoCells: Map<string, ICell>;
}

class GamePage extends Component<IProps, IState> {
  nahimov = createNahimov();

  playerOneShips = Ship.generate();
  playerTwoShips = Ship.generate();

  state = {
    currentPlayer: Players.One,
    playerOneCells: Cell.generate(),
    playerTwoCells: Cell.generate(),
    gameState: GameStates.Play,
    winner: null
  };

  componentDidMount() {
    this.initPlayerOne();
    this.initPlayerTwo();
  }

  get isGameOver(): boolean {
    return this.state.gameState === GameStates.Over;
  }

  initPlayerOne() {
    const { disposition } = this.props;
    const { playerOneCells } = this.state;

    for (let i = 0; i < disposition.length; ++i) {
      const ship = this.playerOneShips.find(
        (item: IShip) => item.id === disposition[i].id
      );

      if (ship) {
        ship.move(disposition[i].x, disposition[i].y);

        if (disposition[i].orientation === Orientation.Vertical) {
          ship.rotate();
        }
      }
    }

    Cell.updateCells(playerOneCells, this.playerOneShips);
    this.setState({ playerOneCells });
  }

  initPlayerTwo() {
    const { playerTwoCells } = this.state;

    for (let i = 0; i < this.playerTwoShips.length; ++i) {
      Ship.setPositionRandomly(this.playerTwoShips[i], playerTwoCells);
      Cell.updateCells(playerTwoCells, this.playerTwoShips);
    }
    this.setState({ playerTwoCells });
  }

  handleOnClick = (x: number, y: number) => {
    const { playerTwoCells, currentPlayer, gameState } = this.state;

    if (currentPlayer === Players.Two || gameState === GameStates.Over) {
      return;
    }

    let nextPlayer = Players.Two;
    const cell = playerTwoCells.get(`${x}:${y}`);

    if (cell.isDamaged() || cell.isOpen()) {
      return;
    }

    this.strike(cell, this.playerTwoShips, playerTwoCells);

    if (cell.isDamaged()) {
      nextPlayer = Players.One;
    } else {
      this.counterAttack();
    }

    this.setState({ playerTwoCells, currentPlayer: nextPlayer });
  };

  counterAttack() {
    setTimeout(() => {
      const { playerOneCells, gameState } = this.state;

      if (gameState === GameStates.Over) {
        return;
      }

      let currentPlayer = Players.One;

      const key = this.nahimov.getTargetKey();
      const cell = playerOneCells.get(key);

      const result = this.strike(cell, this.playerOneShips, playerOneCells);
      this.nahimov.setResult(cell.position, result);

      if (cell.isDamaged()) {
        currentPlayer = Players.Two;
        this.counterAttack();
      }

      this.setState({ playerOneCells, currentPlayer });
    }, 1000);
  }

  strike = (cell: ICell, ships: IShip[], cells: Map<string, ICell>) => {
    let result = CellStates.Open;

    if (cell.isFilled()) {
      const ship = ships.find(i => i.id === cell.shipId);
      ship!.addDamage();
      cell.state = CellStates.Injured;

      if (ship!.isDestroyed()) {
        result = CellStates.Destroyed;

        if (this.state.currentPlayer === Players.Two) {
          this.nahimov.openCells(ship!.borders());
        }

        for (const position of ship!.borders()) {
          const cell = cells.get(position.key);
          if (cell) {
            cell.state = CellStates.Open;
          }
        }

        const damagedShips = ships.filter((ship: IShip) => {
          return ship.isDestroyed();
        });

        if (damagedShips.length === TOTAL_SHIPS_COUNT) {
          this.setState({ gameState: GameStates.Over });
        }
      } else {
        result = CellStates.Injured;
      }
    } else if (!cell.isOpen() || cell.isInactive()) {
      cell.state = CellStates.Open;
    }

    return result;
  };

  handleReplayClick = () => {
    this.props.resetDisposition();
  };

  render() {
    const { playerOneCells, playerTwoCells, currentPlayer } = this.state;

    return (
      <div className="page v-container">
        <Header as="h3" content="Whist all up!" />

        <div className="h-container">
          <div className="h-container__col">
            <BoardTitle
              isCurrent={currentPlayer === Players.Two}
              content="Player1"
            />

            <Battlefield cells={playerOneCells} />
          </div>

          <div className="h-container__col">
            <BoardTitle
              isCurrent={currentPlayer === Players.One}
              content="Player2"
            />

            <Battlefield
              hidden={true}
              cells={playerTwoCells}
              onCellClick={this.handleOnClick}
            />
          </div>
        </div>

        {this.isGameOver && (
          <GameResult onClick={this.handleReplayClick} winner={currentPlayer} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    disposition: state.disposition
  };
};

const mapDispatchToProps = {
  resetDisposition
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GamePage);
