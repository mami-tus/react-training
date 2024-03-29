import React from 'react';

type Props = {
  board: Array<Array<string | null>>;
  onClickCell: (row: number, col: number) => void;
};

const Board: React.FC<Props> = ({ board, onClickCell }) => {
  return (
    <div className='board'>
      {board.map((rowValues, rowIndex) => (
        <div key={rowIndex} className='board-row'>
          {rowValues.map((cellValue, cellIndex) => (
            <button
              key={cellIndex}
              className='cell'
              data-value={cellValue}
              onClick={() => onClickCell(rowIndex, cellIndex)}
            >
              {cellValue}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
