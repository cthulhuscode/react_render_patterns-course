import { InitialStateType } from "../hooks";
import {
  ERROR,
  LOADING,
  SAVED_ITEM,
  SUCCESS,
  SYNCHRONIZED_ITEM,
} from "./actionTypes";

export default (
  state: InitialStateType,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case SYNCHRONIZED_ITEM: {
      return {
        ...state,
        loading: true,
        isItemSynchronized: false,
      };
    }

    case ERROR: {
      return {
        ...state,
        error: true,
      };
    }

    case SUCCESS: {
      return {
        ...state,
        item: action.payload,
        loading: false,
        isItemSynchronized: true,
      };
    }

    case SAVED_ITEM: {
      return {
        ...state,
        item: action.payload,
      };
    }

    case LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }

    default:
      return state;
  }
};
