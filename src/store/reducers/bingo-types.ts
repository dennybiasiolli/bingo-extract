import { Action } from 'redux';


export enum BingoActions {
  EXTRACT = 'EXTRACT',
}

interface ExtractAction extends Action {
  type: BingoActions.EXTRACT,
}

export type BingoActionTypes = ExtractAction;
