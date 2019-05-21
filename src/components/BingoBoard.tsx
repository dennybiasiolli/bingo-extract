import React from 'react';

import { BingoSquare } from './BingoSquare';
import { BingoNumber } from '../models/BingoNumber';


export interface BingoBoardProps {
  numbers: BingoNumber[];
};

export function BingoBoard({ numbers }: BingoBoardProps) {
  return (
    <div>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((r) => (<div className="board-row" key={r}>
        {numbers.slice(10 * r, 10 * r + 10).map((n) => renderSquare(n))}
      </div>))}
    </div>
  );

  function renderSquare(i: BingoNumber) {
    return <BingoSquare
      number={i}
      key={i.value}
    />;
  }
}
