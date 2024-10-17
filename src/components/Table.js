import React from 'react';
import Cell from './Cell';

const Table = ({ rowNum, texts}) => {
  const rows = Array.from({ length: rowNum }, (_, rowIndex) => (
    <tr key={rowIndex}>
      {Array.from({ length: 6 }, (_, colIndex) => (
        <Cell key={colIndex} isTitle={colIndex === 0 || rowNum === 1} title={ texts && colIndex === 0 ? texts[rowIndex] : ''} />
      ))}
    </tr>
  ));

  return (
    <table style={{ borderCollapse: 'collapse', margin: '10px' }}>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default Table;