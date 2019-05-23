import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { Fab } from '@material-ui/core';

import { BingoBoard } from './BingoBoard';
import { Number } from './Number';
import { RootState } from '../store';
import { extract } from '../store/reducers/bingo-actions';


const mapStateToProps = (state: RootState) => ({
  numbers: state.bingo.numbers,
  lastNumberExtracted: state.bingo.lastNumberExtracted,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  extract: extract,
}, dispatch);


export interface MainBoardProps extends ReturnType<typeof mapStateToProps>, ReturnType<typeof mapDispatchToProps> { };

function MainBoardBase({ numbers, lastNumberExtracted, extract }: MainBoardProps) {
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
        style={{
          marginBottom: 20,
        }}
      >Extract</Fab>
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
