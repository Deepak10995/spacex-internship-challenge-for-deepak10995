import { applyMiddleware, createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
// import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import rootReducer from '../Reducers/index';
import initialState from '../Reducers/initialState';

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
