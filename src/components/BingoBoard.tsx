import React, { CSSProperties } from 'react';

import { BingoSquare } from './BingoSquare';
import { BingoNumber } from '../models/BingoNumber';


export interface BingoBoardProps {
  numbers: BingoNumber[];
  numberSize?: number;
  rows?: number;
  style?: CSSProperties;
};

export function BingoBoard({ numbers, numberSize, rows = 9, style }: BingoBoardProps) {
  const rowIndexes = Array.from({ length: rows }, (v, k) => k);
  const numPerRow = 90 / rows;
  console.log();
  return (
    <div style={{
      ...style,
      textAlign: 'center',
    }}>
      {rowIndexes.map((r) => (<div key={r}>
        {numbers.slice(numPerRow * r, numPerRow * r + numPerRow).map((n) => renderSquare(n))}
      </div>))}
    </div>
  );

  function renderSquare(i: BingoNumber) {
    return <BingoSquare
      number={i}
      size={numberSize}
      key={i.value}
    />;
  }
}
