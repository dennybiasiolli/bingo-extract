import React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { Button, CardContent } from '@material-ui/core';

import { BingoBoard } from './BingoBoard';
import { Board } from './Board';
import { RootState } from '../store';
import { extract } from '../store/reducers/bingo-actions';
import { makeMove, jumpTo } from '../store/reducers/tictactoe-actions';


const mapStateToProps = (state: RootState) => ({
  current: state.tictactoe.current,
  history: state.tictactoe.history,
  stepNumber: state.tictactoe.stepNumber,
  winner: state.tictactoe.winner,
  xIsNext: state.tictactoe.xIsNext,
  numbers: state.bingo.numbers,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  makeMove: makeMove,
  jumpTo: jumpTo,
  extract: extract,
}, dispatch);


export interface GameProps extends ReturnType<typeof mapStateToProps>, ReturnType<typeof mapDispatchToProps> { };

function GameBase({ current, history, winner, xIsNext, numbers, makeMove, jumpTo, extract }: GameProps) {
  const moves = history.map((_step, move) => {
    const desc = move ?
      'Go to move #' + move :
      'Go to game start';
    return (
      <li key={move}>
        <Button variant="contained" onClick={() => jumpTo(move)}>{desc}</Button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <CardContent>
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={makeMove}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
      <br />
      <div>
        <Button variant="contained" onClick={() => extract()}>Extract</Button>
        <BingoBoard
          numbers={numbers}
        />
      </div>
    </CardContent>
  );
}

export const Game = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameBase)
