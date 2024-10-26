import React, {
  useState,
  useRef,
  createRef,
  forwardRef,
  useCallback,
} from "react";
import { motion } from "framer-motion";

interface Cell {
  blocked: boolean;
  answer: string;
  isFirstLetter: boolean;
  direction: "across" | "down";
}

interface CellValue {
  value: string;
  correct: boolean | null;
}

interface Clue {
  text: string;
  direction: "across" | "down";
  number: number; // Optional: Add clue number for better organization
}

interface CrosswordProps {
  grid: Cell[][];
  clues: Clue[]; // New prop for clues
  onCrosswordSolved: (isSolved: boolean) => void;
}

const CrosswordCell = forwardRef<
  HTMLInputElement,
  {
    cell: Cell;
    cellValue: CellValue;
    rowIndex: number;
    cellIndex: number;
    handleChange: (row: number, col: number, value: string) => void;
  }
>(({ cell, cellValue, rowIndex, cellIndex, handleChange }, ref) => {
  let cellClassName = "border border-gray-400 ";
  cellClassName += cell.blocked
    ? "bg-black "
    : cellValue.correct === true
    ? "bg-green-500 "
    : cellValue.correct === false
    ? "bg-red-500 "
    : "bg-white ";

  return (
    <td className={cellClassName}>
      <input
        ref={ref}
        type="text"
        maxLength={1}
        className="w-6 h-6 sm:w-12 sm:h-12 md:w-16 md:h-16 text-center text-black"
        value={cellValue.value}
        onChange={(e) => handleChange(rowIndex, cellIndex, e.target.value)}
        disabled={cell.blocked}
        style={{ maxWidth: "2rem", maxHeight: "2rem" }}
      />
    </td>
  );
});

const CrosswordRow = React.memo(
  ({
    row,
    rowIndex,
    cellRefs,
    cellValues,
    handleChange,
  }: {
    row: Cell[];
    rowIndex: number;
    cellRefs: React.RefObject<HTMLInputElement>[];
    cellValues: CellValue[];
    handleChange: (
      rowIndex: number,
      cellIndex: number,
      newValue: string
    ) => void;
  }) => {
    return (
      <tr>
        {row.map((cell, cellIndex) => (
          <CrosswordCell
            key={`${rowIndex}-${cellIndex}`}
            cell={cell}
            ref={cellRefs[cellIndex]}
            rowIndex={rowIndex}
            cellIndex={cellIndex}
            cellValue={cellValues[cellIndex]}
            handleChange={handleChange}
          />
        ))}
      </tr>
    );
  }
);

const Crossword: React.FC<CrosswordProps> = ({
  grid,
  clues,
  onCrosswordSolved,
}) => {
  const cellRefs = useRef<React.RefObject<HTMLInputElement>[][]>(
    grid.map((row) => row.map(() => createRef<HTMLInputElement>()))
  );

  const [cellValues, setCellValues] = useState<CellValue[][]>(
    grid.map((row) =>
      row.map((cell) => ({
        value: cell.isFirstLetter && !cell.blocked ? cell.answer : "",
        correct: null,
      }))
    )
  );

  const resetPuzzle = useCallback(() => {
    setCellValues(
      grid.map((row) =>
        row.map((cell) => ({
          value: cell.isFirstLetter && !cell.blocked ? cell.answer : "",
          correct: null,
        }))
      )
    );
  }, [grid]);

  const checkAnswers = useCallback(() => {
    setCellValues((currentValues) =>
      currentValues.map((row, rowIndex) =>
        row.map((cell, cellIndex) => {
          const isCorrect = grid[rowIndex][cellIndex].answer === cell.value;
          return {
            ...cell,
            correct: !grid[rowIndex][cellIndex].blocked
              ? isCorrect
              : cell.correct,
          };
        })
      )
    );
  }, [grid]);

  const handleSubmit = useCallback(() => {
    const allCorrect = cellValues.every((row, rowIndex) =>
      row.every(
        (cell, cellIndex) => grid[rowIndex][cellIndex].blocked || cell.correct
      )
    );
    if (allCorrect) {
      onCrosswordSolved(true);
    } else {
      alert("Not all answers are correct.");
    }
  }, [cellValues, grid, onCrosswordSolved]);

  const handleNavigation = useCallback(
    (row: number, col: number, direction: "down" | "across") => {
      const nextRow = direction === "down" ? row + 1 : row;
      const nextCol = direction === "across" ? col + 1 : col;
      const nextCellRef = cellRefs.current[nextRow]?.[nextCol];
      if (nextCellRef && nextCellRef.current) {
        nextCellRef.current.focus();
      }
    },
    []
  );

  const handleChange = useCallback(
    (rowIndex: number, cellIndex: number, newValue: string) => {
      const updatedValues = [...cellValues];
      updatedValues[rowIndex][cellIndex] = {
        ...updatedValues[rowIndex][cellIndex],
        value: newValue.toUpperCase(),
        correct: null,
      };
      setCellValues(updatedValues);

      if (newValue.trim().length === 1) {
        handleNavigation(
          rowIndex,
          cellIndex,
          grid[rowIndex][cellIndex].direction
        );
      }
    },
    [cellValues, grid, handleNavigation]
  );

  return (
    <div className="my-8 px-2 md:px-0 ">
      <div className="flex justify-center items-center z-0">
        <div className="bg-light opacity-60 w-[250px] h-[100px] rounded-full overflow-hidden absolute filter blur-[80px] animate-gradientMesh_1"></div>
        <div className="bg-light2 opacity-60 w-[200px] h-[100px] rounded-full overflow-hidden absolute filter blur-[80px] animate-gradientMesh_2"></div>
        <div className="bg-light opacity-60 w-[250px] h-[100px] rounded-full overflow-hidden absolute filter blur-[80px] animate-gradientMesh_1"></div>
      </div>
      <div className="relative flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0, delay: 0 } }}
          transition={{ delay: 0, duration: 2 }}
        >
          <motion.h1 className="text-4xl mx-2 md:text-6xl mt-16 md:mt-16 text-primary font-extrabold text-center">
            Crossword Challenge
          </motion.h1>
        </motion.div>
      </div>

      {/* Clue Section */}
      <div className="flex flex-col md:flex-row justify-center my-4 p-5">
        <div className="w-full md:w-1/3 p-4">
          <h2 className="text-2xl font-bold mb-2">Clues</h2>
          <ul className="list-disc list-inside">
            {clues.map((clue) => (
              <li key={clue.number}>
                <span className="font-semibold">{clue.number}. </span>
                {clue.text} ({clue.direction})
              </li>
            ))}
          </ul>
        </div>

        {/* Crossword Grid */}
        <div className="flex justify-center my-12 overflow-auto flex-col">
          <table className="border-collapse border border-gray-500 min-w-max z-20">
            <tbody>
              {grid.map((row, rowIndex) => (
                <CrosswordRow
                  key={rowIndex}
                  row={row}
                  rowIndex={rowIndex}
                  cellRefs={cellRefs.current[rowIndex]}
                  cellValues={cellValues[rowIndex]}
                  handleChange={handleChange}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-center flex-col md:flex-row">
        <button
          onClick={resetPuzzle}
          className="mt-4 w-40 mx-auto rounded-lg px-2 py-2 text-sm border bg-primary border-light hover:bg-light cursor-pointer"
        >
          Reset Puzzle
        </button>
        <button
          onClick={checkAnswers}
          className="mt-4 w-40 mx-auto rounded-lg px-2 py-2 text-sm border bg-primary border-light hover:bg-light cursor-pointer"
        >
          Check Answers
        </button>
        <button
          onClick={handleSubmit}
          className="mt-4 w-40 mx-auto rounded-lg px-2 py-2 text-sm border bg-primary border-light hover:bg-light cursor-pointer"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Crossword;
