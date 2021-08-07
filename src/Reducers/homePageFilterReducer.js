import * as types from '../Actions/actionsTypes';
import initialState from './initialState';

export default function homePageFilterReducer(
  state = initialState.homePagefilterData,
  action
) {
  switch (action.type) {
    case types.LOAD_FILTER_HOME_PAGE_DATA_SUCCESS:
      return action.homePagefilterData;
    default:
      return state;
  }
}
