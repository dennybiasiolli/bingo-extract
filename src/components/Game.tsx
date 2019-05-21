import React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { Button, CardContent } from '@material-ui/core';

import { BingoBoard } from './BingoBoard';
import { RootState } from '../store';
import { extract } from '../store/reducers/bingo-actions';


const mapStateToProps = (state: RootState) => ({
  numbers: state.bingo.numbers,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  extract: extract,
}, dispatch);


export interface GameProps extends ReturnType<typeof mapStateToProps>, ReturnType<typeof mapDispatchToProps> { };

function GameBase({ numbers, extract }: GameProps) {
  return (
    <CardContent>
      <Button variant="contained" onClick={() => extract()}>Extract</Button>
      <BingoBoard
        numbers={numbers}
      />
    </CardContent>
  );
}

export const Game = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameBase)
