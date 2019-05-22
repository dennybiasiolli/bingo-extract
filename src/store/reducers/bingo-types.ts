import { Action } from 'redux';


export enum BingoActions {
  EXTRACT = 'EXTRACT',
  RESET = 'RESET',
}

interface ExtractAction extends Action {
  type: BingoActions.EXTRACT,
}

interface ResetAction extends Action {
  type: BingoActions.RESET,
}

export type BingoActionTypes = ExtractAction | ResetAction;
