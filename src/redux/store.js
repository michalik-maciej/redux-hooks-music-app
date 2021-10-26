import { combineReducers, createStore } from 'redux';

import artistsReducer from './artistsRedux';
import initialState from '../data/data';
import songsReducer from './songsRedux';

const reducers = {
  artists: artistsReducer,
  songs: songsReducer,
};

const reducer = combineReducers(reducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
