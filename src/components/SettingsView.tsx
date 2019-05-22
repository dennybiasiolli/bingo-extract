import React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { Button, CardContent } from '@material-ui/core';

import { RootState } from '../store';
import { reset } from '../store/reducers/bingo-actions';


const mapStateToProps = (state: RootState) => ({
  numbers: state.bingo.numbers,
  lastIndexExtracted: state.bingo.lastNumberExtracted,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  reset: reset,
}, dispatch);


export interface SettingsViewProps extends ReturnType<typeof mapStateToProps>, ReturnType<typeof mapDispatchToProps> { };

function SettingsViewBase({ numbers, reset }: SettingsViewProps) {
  return (
    <CardContent>
      <Button
        color="secondary"
        variant="contained"
        onClick={() => handleReset()}
      >Reset Game</Button>
    </CardContent>
  );

  function handleReset() {
    if (window.confirm('Are you sure to reset to the initial state?')) {
      reset();
    }
  }
}

export const SettingsView = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SettingsViewBase)
