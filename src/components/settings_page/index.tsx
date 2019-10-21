import React, { Component } from "react";
import { connect } from "react-redux";
import { updateDisposition } from "../../actions/disposition";
import Ship from "../../lib/ship";
import Cell from "../../lib/cell";
import DragAndDropCursor from "../common/DragAndDropCursor";
import Battlefield from "../common/Battlefield";
import Header from "../common/Header";
import ShipList from "./ShipList";
import { IShip, ICell } from "../../types";

interface IProps {
  updateDisposition: Function;
}

interface IState {
  cells: Map<string, ICell>;
  ships: IShip[];
  currentShip: IShip | null;
}

class SetupPage extends Component<IProps, IState> {
  state = {
    currentShip: null,
    ships: Ship.generate(),
    cells: Cell.generate()
  };

  componentDidMount() {
    this.updateCells();
  }

  componentDidUpdate(prevProps: IProps, prevState: IState) {
    if (prevState.currentShip !== null && this.state.currentShip === null) {
      this.updateCells();
    } else if (prevState.currentShip !== this.state.currentShip) {
      this.updateCells();
    }
  }

  get isReadyToPlay(): boolean {
    return this.state.ships.filter((i: IShip) => i.isOnBoard()).length === 10;
  }

  updateCells() {
    const { cells, ships } = this.state;

    Cell.resetCells(cells);
    Cell.updateCells(cells, ships);

    this.setState({ cells });
  }

  handleMouseDown = (shipId: string) => {
    const setCurrentShip = () => {
      const { ships } = this.state;

      for (let i = 0; i < ships.length; ++i) {
        if (ships[i].id === +shipId) {
          ships[i].move(0, 0);
          this.setState({ ships, currentShip: ships[i] });

          break;
        }
      }
    };

    setCurrentShip();
  };

  handleMouseUp = (shipId: number, cellX: number, cellY: number) => {
    const { ships, cells } = this.state;

    for (let i = 0; i < ships.length; ++i) {
      if (ships[i].id === shipId) {
        ships[i].move(cellX, cellY);

        if (Ship.isPositionValid(ships[i], cells)) {
          this.setState({ ships, currentShip: null });
        } else {
          ships[i].reset();
        }

        break;
      }
    }
  };

  handleRotateShip = (ship: IShip) => {
    ship.rotate();
    this.setState({ currentShip: ship });
  };

  handlePlayClick = () => {
    const ships = this.state.ships.map((item: IShip) => item.simplify());
    this.props.updateDisposition(ships);
  };

  render() {
    const { ships, cells, currentShip } = this.state;

    return (
      <div className="page v-container">
        <Header as="h3" content="Hi, admiral! Set up your flotilla!" />

        <div className="h-container">
          <div className="h-container__col">
            <Battlefield cells={cells} />
          </div>

          <div className="h-container__col">
            <ShipList ships={ships} />

            <ul className="brief">
              <li>
                <b>move</b> - drag and drop
              </li>
              <li>
                <b>rotate</b> - select and press space
              </li>
            </ul>
          </div>
        </div>

        <div>
          {this.isReadyToPlay && (
            <button onClick={this.handlePlayClick}>Battle!</button>
          )}
        </div>

        <DragAndDropCursor
          currentShip={currentShip}
          onMouseDown={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}
          onRotateShip={this.handleRotateShip}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  updateDisposition
};

export default connect(
  null,
  mapDispatchToProps
)(SetupPage);
