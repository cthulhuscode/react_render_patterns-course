import { useEffect, useReducer } from "react";
import {
  onError,
  onLoading,
  onSaveItem,
  onSuccess,
  onSynchronizeItem,
} from "../reducers/actionCreators";
import reducer from "../reducers/reducer";

export interface InitialStateType {
  loading: boolean;
  error: boolean;
  item: [];
  isItemSynchronized: boolean;
}

export const useLocalStorage = (itemName: string, initialValue: [] = []) => {
  const initialState: InitialStateType = {
    loading: true,
    error: false,
    item: initialValue,
    isItemSynchronized: true,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { loading, error, item, isItemSynchronized } = state;

  useEffect(() => {
    setTimeout(() => {
      try {
        let parsedItem;
        const localStorageItem = localStorage.getItem(itemName);

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = [];
        } else parsedItem = JSON.parse(localStorageItem);

        dispatch(onSuccess(parsedItem));
      } catch (e) {
        console.log(e);
        dispatch(onError(true));
        dispatch(onLoading(false));
      }
    }, 2000);
  }, [isItemSynchronized]);

  const saveItems = (newItems: any) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItems));
      dispatch(onSaveItem(newItems));
    } catch (e) {
      dispatch(onError(true));
    }
  };

  const synchronizeItem = () => dispatch(onSynchronizeItem());

  return { item, error, loading, setItem: saveItems, synchronizeItem };
};
