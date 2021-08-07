import { agent } from '../Api/agent';
import * as API from '../Api/apiPath';
import * as types from './actionsTypes';
import toasterStatusAction from './toasterStatusAction';

export function loadDataSuccess(homePageData) {
  return { type: types.LOAD_HOME_PAGE_DATA_SUCCESS, homePageData };
}
export function loadFilterDataSuccess(homePageFilterData) {
  return { type: types.LOAD_FILTER_HOME_PAGE_DATA_SUCCESS, homePageFilterData };
}

export function loadNotFoundDataSuccess(isData) {
  return { type: types.LOADED_DATA_SUCCESS, isData };
}

export const loadData = (request) => async (dispatch) => {
  try {
    const response = await agent(API.UPCOMING_LAUNCHES);
    console.log('response length ==>> ', response.length);
    if (response.length <= 0) {
      dispatch(loadNotFoundDataSuccess(false));
    } else {
      dispatch(loadNotFoundDataSuccess(true));
    }
    if (response) {
      dispatch(loadDataSuccess(response));
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
export const loadFilterData = (request) => async (dispatch) => {
  try {
    console.log('request from params', request);
    let response = [];
    if (request !== 'Upcoming Launches') {
      response = await agent(API.ALL_LAUNCHES);
      if (request === 'Failed Launches') {
        response = response.filter((launch) => launch.launch_success === false);
      }
      if (request === 'Successful Launches') {
        response = response.filter((launch) => launch.launch_success === true);
      }
    } else {
      response = await agent(API.UPCOMING_LAUNCHES);
    }
    console.log('response length ==>> ', response.length);
    if (response.length <= 0) {
      dispatch(loadNotFoundDataSuccess(false));
    } else {
      dispatch(loadNotFoundDataSuccess(true));
    }
    if (response) {
      dispatch(loadDataSuccess(response));
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
