import React, { Component } from "react";
import { fromEvent } from "rxjs";
import { createCursor } from "../../lib/cursor";
import Ship from "../common/Ship";
import { IShip, Cursor } from "../../types";

interface IProps {
  currentShip: IShip | null;
  onMouseDown: Function;
  onMouseUp: Function;
  onRotateShip: Function;
}

export default class DragAndDropCursor extends Component<IProps> {
  cursor: Cursor | null = null;

  componentDidMount() {
    this.handleDragAndDrop();
  }

  componentDidUpdate(prevProps: IProps) {
    if (prevProps.currentShip && this.props.currentShip && !this.cursor) {
      this.cursor = createCursor();
    }

    if (this.props.currentShip === null) {
      this.cursor = null;
    }
  }

  handleDragAndDrop = () => {
    fromEvent(document.getElementsByClassName("cell"), "mousedown").subscribe(
      this.handleMouseDown
    );

    fromEvent(document, "mousemove").subscribe(this.handleMouseMove);

    fromEvent(document.getElementsByClassName("field"), "mouseup").subscribe(
      this.handleMouseUp
    );

    fromEvent(document, "keydown").subscribe((event: any) => {
      if (event.keyCode === 32 && this.props.currentShip) {
        this.props.onRotateShip(this.props.currentShip);
      }
    });
  };

  handleMouseDown = (e: any) => {
    const isActive = !e.target.parentElement.classList.contains("inactive");
    const isShip = +e.target.dataset.shipid !== -1;

    if (!isActive || !isShip || this.props.currentShip) return;

    this.props.onMouseDown(e.target.dataset.shipid);
  };

  handleMouseMove = (e: any) => {
    if (!this.cursor) return;

    this.cursor.move(e.clientX, e.clientY);
  };

  handleMouseUp = (e: any) => {
    if (!this.props.currentShip || !this.cursor) return;

    const cellX = +e.target.dataset.x;
    const cellY = +e.target.dataset.y;
    const id = +this.cursor.shipId();

    this.props.onMouseUp(id, cellX, cellY);
  };

  render() {
    const { currentShip } = this.props;

    if (!currentShip) return null;

    return <Ship ship={currentShip} isSelected={true} />;
  }
}
