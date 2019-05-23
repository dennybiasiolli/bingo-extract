import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { Fab } from '@material-ui/core';

import { BingoBoard } from './BingoBoard';
import { Number } from './Number';
import { RootState } from '../store';
import { extract } from '../store/reducers/bingo-actions';


const mapStateToProps = (state: RootState) => {
  const lastTenNumbers = state.bingo.shuffledIndexes.map(
    i => state.bingo.numbers[i].value
  ).slice(
    Math.max(0, state.bingo.lastIndexExtracted - 9),
    state.bingo.lastIndexExtracted + 1
  );
  return {
    numbers: state.bingo.numbers,
    lastNumberExtracted: state.bingo.lastNumberExtracted,
    lastTenNumbers,
    remaining: 90 - state.bingo.lastIndexExtracted - 1,
  };
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  extract: extract,
}, dispatch);


export interface MainBoardProps extends ReturnType<typeof mapStateToProps>, ReturnType<typeof mapDispatchToProps> { };

function MainBoardBase({ numbers, lastNumberExtracted, lastTenNumbers, remaining, extract }: MainBoardProps) {
  const extractButton = useRef(null);
  useEffect(() => {
    const node: any = extractButton.current;
    if (node) {
      node.focus();
    }
  });

  return (
    <div style={{
      textAlign: 'center',
    }}>
      <Number value={lastNumberExtracted}></Number>
      <Fab
        color="primary"
        variant="extended"
        onClick={() => extract()}
        buttonRef={extractButton}
      >Extract</Fab>
      <div style={{
        margin: 10,
      }}>
        <span>
          Remaining: {remaining}
        </span>
        <span style={{ margin: '0 10px' }}>|</span>
        <span>
          Last 10 numbers: {lastTenNumbers.join(', ')}
        </span>

      </div>
      <BingoBoard
        numbers={numbers}
        numberSize={30}
        rows={3}
        style={{
          // marginTop: -100,
        }}
      />
    </div>
  );
}

export const MainBoard = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainBoardBase)
