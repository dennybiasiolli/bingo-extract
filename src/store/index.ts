import { createStore, combineReducers } from 'redux';

import { BingoReducer } from './reducers/bingo-reducer';
import { BingoActionTypes } from './reducers/bingo-types';


const rootReducer = combineReducers({
  bingo: BingoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type RootAction = BingoActionTypes;
export default () => createStore<RootState, RootAction, {}, {}>(rootReducer);
