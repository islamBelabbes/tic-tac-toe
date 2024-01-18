import { useState } from "react";
const generateCells = () => {
  return Array(9)
    .fill(0)
    .map((_, index) => ({ content: null, id: index + 1 }));
};
function useTicTacToe() {
  const defaultTurn = "x";
  const defaultScore = {
    x: 0,
    o: 0,
    draw: 0,
  };
  const [cells, setCells] = useState(generateCells());
  const [turn, setTurn] = useState(defaultTurn);
  const [isGameOver, setIsGameOver] = useState(false);
  const [victory, setVictory] = useState("");
  const [score, setScore] = useState(defaultScore);

  const resetGame = () => {
    setCells(generateCells());
    setTurn(defaultTurn);
    setIsGameOver(false);
    setVictory("");
  };
  const handleClick = (cellId) => {
    if (
      cells[cells.findIndex((cell) => cell.id === cellId)].content ||
      isGameOver
    ) {
      return;
    }
    let value;
    if (turn === "x") {
      value = "x";
      setTurn("o");
    } else {
      value = "o";
      setTurn("x");
    }
    const newCells = cells.map((cell) => {
      return cell.id === cellId ? { ...cell, content: value } : cell;
    });
    setCells(newCells);

    if (isVictory(newCells)) {
      setIsGameOver(true);
      setVictory(turn);
      setScore({
        ...score,
        [turn]: score[turn] + 1,
      });
      return;
    }

    if (cells.filter((cell) => !cell.content).length - 1 === 0) {
      setIsGameOver(true);
      setScore({
        ...score,
        draw: score["draw"] + 1,
      });
    }
  };

  const isVictory = (cells) => {
    let isWin = false;
    const waysToWin = [
      [1, 2, 3], // Top row
      [4, 5, 6], // Middle row
      [7, 8, 9], // Bottom row
      [1, 4, 7], // Left column
      [2, 5, 8], // Middle column
      [3, 6, 9], // Right column
      [1, 5, 9], // Diagonal from top-left to bottom-right
      [3, 5, 7], // Diagonal from top-right to bottom-left
    ];

    for (const win of waysToWin) {
      if (
        cells[cells.findIndex((item) => item.id === win[0])].content ===
          cells[cells.findIndex((item) => item.id === win[1])].content &&
        cells[cells.findIndex((item) => item.id === win[1])].content ===
          cells[cells.findIndex((item) => item.id === win[2])].content &&
        cells[cells.findIndex((item) => item.id === win[2])].content
      ) {
        isWin = true;
        break;
      }
    }

    return isWin;
  };

  return {
    cells,
    setCells,
    turn,
    setTurn,
    isGameOver,
    setIsGameOver,
    handleClick,
    generateCells,
    isVictory,
    victory,
    score,
    resetGame,
  };
}

export default useTicTacToe;
