import { agent } from '../Api/agent';
import * as API from '../Api/apiPath';
import * as types from './actionsTypes';
import toasterStatusAction from './toasterStatusAction';

export function loadDataSuccess(homePageData) {
  return { type: types.LOAD_HOME_PAGE_DATA_SUCCESS, homePageData };
}

export function loadNotFoundDataSuccess(isData) {
  return { type: types.LOADED_DATA_SUCCESS, isData };
}

export function loadPaginationDataSuccess(pagination) {
  return { type: types.LOAD_PAGINATION_DATA_SUCCESS, pagination };
}

export const loadData = (request) => async (dispatch) => {
  try {
    const response = await agent(API.ALL_LAUNCHES);
    console.log('response length ==>> ', response.length);
    if (response.length <= 0) {
      dispatch(loadNotFoundDataSuccess(false));
    } else {
      dispatch(loadNotFoundDataSuccess(true));
    }
    // if (Object.keys(request).length !== 0) {
    //   dispatch(loadNotFoundDataSuccess(true));
    // }
    if (response) {
      dispatch(loadDataSuccess(response));
      //   dispatch(loadPaginationDataSuccess(response));
    }
  } catch (error) {
    dispatch(
      toasterStatusAction({
        open: true,
        message: error.message,
        severity: 'error',
      })
    );
    dispatch(loadNotFoundDataSuccess(false));
  }
};
