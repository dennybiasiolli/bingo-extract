import React from 'react';
import { Button } from '@material-ui/core';


export function Square(props: { value?: string, onClick: Function }) {
  return (
    <Button
      style={{
        height: 50,
        width: 50,
      }}
      variant="outlined"
      className="square"
      onClick={() => props.onClick()}
    >
      {props.value || ' '}
    </Button>
  );
}
