import { combineReducers } from 'redux';
import dialogOpen from './dialogOpenReducer';
import homePagefilterData from './homePageFilterReducer';
import homePageData from './homePageReducers';
import isData from './isDataRequest';
import isHead from './isHeadRequest';
import isFetching from './networkRequest';
import pageData from './pageReducers';
import toaster from './toasterReducer';

const rootReducer = combineReducers({
  isFetching,
  homePageData,
  pageData,
  toaster,
  isData,
  isHead,
  dialogOpen,
  homePagefilterData,
});

export default function combinedRootReducer(state, action) {
  return rootReducer(state, action);
}
