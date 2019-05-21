import { createStore, combineReducers } from 'redux';

import { CounterReducer } from './reducers/counter-reducer';
import { CounterActionTypes } from './reducers/counter-types';
import { TictactoeReducer } from './reducers/tictactoe-reducer';
import { TictactoeActionTypes } from './reducers/tictactoe-types';
import { BingoReducer } from './reducers/bingo-reducer';
import { BingoActionTypes } from './reducers/bingo-types';


const rootReducer = combineReducers({
  bingo: BingoReducer,
  counter: CounterReducer,
  tictactoe: TictactoeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type RootAction = BingoActionTypes | CounterActionTypes | TictactoeActionTypes;
export default () => createStore<RootState, RootAction, {}, {}>(rootReducer);
