import { createStore, combineReducers } from 'redux';

import { BingoReducer } from './reducers/bingo-reducer';
import { BingoActionTypes } from './reducers/bingo-types';


const rootReducer = combineReducers({
  bingo: BingoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type RootAction = BingoActionTypes;

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('bingoExtractState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState) as RootState;
  } catch (err) {
    return undefined;
  }
};

const saveState = (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('bingoExtractState', serializedState);
  } catch {
    // ignore write errors
  }
};

const persistedState = loadState();
export const store = createStore<RootState, RootAction, {}, {}>(
  rootReducer, persistedState);
store.subscribe(() => {
  saveState(store.getState());
});
