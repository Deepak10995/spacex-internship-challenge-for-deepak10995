import { combineReducers } from 'redux';
import dialogOpen from './dialogOpenReducer';
import homePageData from './homePageReducers';
import isData from './isDataRequest';
import isHead from './isHeadRequest';
import isSubmitting from './isSubmittingRequest';
import isFetching from './networkRequest';
import pageData from './pageReducers';
import pagination from './paginationReducers';
import toaster from './toasterReducer';

const rootReducer = combineReducers({
  isSubmitting,
  isFetching,
  homePageData,
  pageData,
  toaster,
  pagination,
  isData,
  isHead,
  dialogOpen,
});

export default function combinedRootReducer(state, action) {
  return rootReducer(state, action);
}
