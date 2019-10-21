import { Ship } from "../types";
import {
  UPDATE_DISPOSITION_SUCCESS,
  RESET_DISPOSITION_SUCCESS
} from "../actions";

const initialState: Ship[] = [];

export default (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_DISPOSITION_SUCCESS:
      return action.positions;
    case RESET_DISPOSITION_SUCCESS:
      return initialState;
    default:
      return state;
  }
};
