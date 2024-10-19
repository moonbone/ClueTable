import {React, useState, useEffect} from 'react';
import Cell from './Cell';

const Table = ({ rowNum, texts, tableId}) => {
  
  const [tableData, setTableData] = useState(() => {
    const savedData = localStorage.getItem(`tableData-${tableId}`);
    return savedData ? JSON.parse(savedData) : Array(rowNum).fill(Array(6).fill(''));
  });

  useEffect(() => {
    localStorage.setItem(`tableData-${tableId}`, JSON.stringify(tableData));
  }, [tableData, tableId]);

  const handleContentChange = (rowIndex, colIndex, newContent, newContentId) => {
    const newTableData = tableData.map((row, rIdx) =>
      row.map((cell, cIdx) => (rIdx === rowIndex && cIdx === colIndex ? (newContentId !== undefined ? newContentId : newContent) : cell))
    );
    setTableData(newTableData);
  };

  const rows = Array.from({ length: rowNum }, (_, rowIndex) => (
    <tr key={rowIndex}>
      {Array.from({ length: 6 }, (_, colIndex) => {
        const cellData = tableData?.[rowIndex]?.[colIndex];
        return (
        <Cell key={colIndex} isTitle={colIndex === 0 || rowNum === 1} title={ cellData !== '' ? cellData : (texts && colIndex === 0 ? texts[rowIndex] : '')} tableId={tableId} rowIndex={rowIndex} colIndex={colIndex} onContentChange={handleContentChange} />
      );})}
    </tr>
  ));

  return (
    <table style={{ borderCollapse: 'collapse' }}>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default Table;