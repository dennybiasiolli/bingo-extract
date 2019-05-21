import React from 'react';
import { Button } from '@material-ui/core';
import { BingoNumber } from '../models/BingoNumber';


export interface BingoSquareProps {
  number: BingoNumber;
};

export function BingoSquare({ number }: BingoSquareProps) {
  return (
    <Button
      disabled
      style={{
        height: 50,
        width: 50,
      }}
      variant={number.extracted ? 'contained' : 'outlined'}
      className="square"
    >
      {number.value}
    </Button>
  );
}
