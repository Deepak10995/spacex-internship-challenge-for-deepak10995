import toasterStatusAction from './toasterStatusAction.js';
// import * as types from "./actionsTypes";

export const loadToasterData = (data) => async (dispatch) => {
  try {
    dispatch(toasterStatusAction(data));
  } catch (error) {
    throw error;
  }
};
