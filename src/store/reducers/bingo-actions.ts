import { BingoActions, BingoActionTypes } from "./bingo-types";


export const extract = (): BingoActionTypes => ({
  type: BingoActions.EXTRACT,
});

export const reset = (): BingoActionTypes => ({
  type: BingoActions.RESET,
});
