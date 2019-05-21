import { BingoActions, BingoActionTypes } from "./bingo-types";


export const extract = (): BingoActionTypes => ({
  type: BingoActions.EXTRACT,
});
