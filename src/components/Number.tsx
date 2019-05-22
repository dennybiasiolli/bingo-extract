import React from 'react';

import { BingoNumber } from '../models/BingoNumber';


export interface NumberProps {
  value?: BingoNumber;
};

export function Number({ value }: NumberProps) {
  return (
    <div style={{
      fontSize: '80vmin',
      fontWeight: 'bold',
      lineHeight: '65vmin',
      textAlign: 'center',
    }}>
      {value ? value.value : '00'}
    </div>
  );
}
