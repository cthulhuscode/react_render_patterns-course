import {
  ERROR,
  LOADING,
  SAVED_ITEM,
  SUCCESS,
  SYNCHRONIZED_ITEM,
} from "./actionTypes";

export const onError = (error: boolean) => ({
  type: ERROR,
  payload: error,
});

export const onSuccess = (data: []) => ({
  type: SUCCESS,
  payload: data,
});

export const onSaveItem = (data: []) => ({
  type: SAVED_ITEM,
  payload: data,
});

export const onSynchronizeItem = () => ({
  type: SYNCHRONIZED_ITEM,
  payload: null,
});

export const onLoading = (loading: boolean) => ({
  type: LOADING,
  payload: loading,
});
