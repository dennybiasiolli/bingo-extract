import { BingoActions, BingoActionTypes } from './bingo-types';
import { shuffle } from '../../utility';
import { BingoNumber } from '../../models/BingoNumber';


export interface BingoState {
  numbers: Array<BingoNumber>;
  shuffledIndexes: Array<number>;
  lastIndexExtracted: number;
  lastNumberExtracted?: BingoNumber;

}

const getInitialState = (): BingoState => ({
  numbers: Array.from({ length: 90 }, (_, k) => new BingoNumber(k + 1)),
  shuffledIndexes: shuffle(
    Array.from({ length: 90 }, (_, k) => k)
  ),
  lastIndexExtracted: -1,
  lastNumberExtracted: undefined,
});

export function BingoReducer(
  state = getInitialState(),
  action: BingoActionTypes,
): BingoState {
  switch (action.type) {
    case BingoActions.EXTRACT:
      if (!(state.lastIndexExtracted + 1 >= 90)) {
        const lastIndexExtracted = state.lastIndexExtracted + 1;
        const numbers = [...state.numbers];
        const lastNumberExtracted = numbers[state.shuffledIndexes[lastIndexExtracted]];
        lastNumberExtracted.extracted = true;
        return {
          ...state,
          numbers,
          lastIndexExtracted,
          lastNumberExtracted,
        }
      }
      break;
    case BingoActions.RESET:
      return getInitialState();
  }
  return state;
}
