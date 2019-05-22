import React from 'react';
import { Button } from '@material-ui/core';
import { BingoNumber } from '../models/BingoNumber';


export interface BingoSquareProps {
  number: BingoNumber;
  size?: number;
};

export function BingoSquare({ number, size }: BingoSquareProps) {
  return (
    <Button
      style={{
        background: number.extracted ? 'darkblue' : undefined,
        color: number.extracted ? 'white' : undefined,
        height: size || '9vmin',
        margin: 0,
        minHeight: 'unset',
        minWidth: 'unset',
        padding: 0,
        width: size || '9vmin',
      }}
      variant={number.extracted ? 'contained' : 'outlined'}
    >
      {number.value}
    </Button>
  );
}
