import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { Tabs, Tab, Fab } from '@material-ui/core';

import { BingoBoard } from './BingoBoard';
import { Number } from './Number';
import { RootState } from '../store';
import { extract } from '../store/reducers/bingo-actions';
import { SettingsView } from './SettingsView';


const mapStateToProps = (state: RootState) => ({
  numbers: state.bingo.numbers,
  lastNumberExtracted: state.bingo.lastNumberExtracted,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  extract: extract,
}, dispatch);


export interface GameProps extends ReturnType<typeof mapStateToProps>, ReturnType<typeof mapDispatchToProps> { };

function GameBase({ numbers, lastNumberExtracted, extract }: GameProps) {
  const [tabValue, setTabValue] = useState(0);
  const extractButton = useRef(null);
  useEffect(() => {
    const node: any = extractButton.current;
    if (node) {
      node.focus();
    }
  });

  return (
    <div>
      <Tabs
        value={tabValue}
        onChange={(_, val) => setTabValue(val)}
        variant="fullWidth"
      >
        <Tab label="Extraction" />
        <Tab label="Board" />
        <Tab label="Settings" />
      </Tabs>
      <br />
      {tabValue === 0 && <div style={{
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
      </div>}
      {tabValue === 1 && <BingoBoard
        numbers={numbers}
      />}
      {tabValue === 2 && <SettingsView />}
    </div>
  );
}

export const Game = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameBase)
