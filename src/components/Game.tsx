import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab } from '@material-ui/core';

import { BingoBoard } from './BingoBoard';
import { MainBoard } from './MainBoard';
import { SettingsView } from './SettingsView';
import { RootState } from '../store';


const mapStateToProps = (state: RootState) => ({
  numbers: state.bingo.numbers,
});

export interface GameBaseProps extends ReturnType<typeof mapStateToProps> { };

function GameBase({ numbers }: GameBaseProps) {
  const [tabValue, setTabValue] = useState(0);

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
      {tabValue === 0 && <MainBoard />}
      {tabValue === 1 && <BingoBoard
        numbers={numbers}
      />}
      {tabValue === 2 && <SettingsView />}
    </div>
  );
}

export const Game = connect(
  mapStateToProps,
)(GameBase)
