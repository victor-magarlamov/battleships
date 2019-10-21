import React from "react";
import Ship from "../common/Ship";
import { IShip } from "../../types";
import { LABELS_OF_SHIP } from "../../constants";

interface IProps {
  ships: IShip[];
}

const ShipList = ({ ships }: IProps) => {
  const categories = ships.reduce((res: any, item: IShip) => {
    if (!res[item.length]) {
      res[item.length] = {
        type: LABELS_OF_SHIP[item.length],
        ships: []
      };
    }

    res[item.length].ships.push(item);

    return res;
  }, {});

  return (
    <div className="ship-list">
      {Object.values(categories).map((category: any) => (
        <div key={`ship-row-${category.type}`} className="ship-list__row">
          <div className="ship-list__row__label">{category.type}</div>
          {category.ships.map((ship: IShip) => (
            <Ship key={`ship-${ship.id}`} ship={ship} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ShipList;
