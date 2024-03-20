import { FC, useState, useEffect } from "react";
import Tile from "../Tile/Tile";
import checkVictoryConditions from "@/functions/checkVictoryConditions/checkVictoryConditions";
import { useGameContext } from "@/contexts/GameContext/GameContext";
import { board, currentBoard } from "@/types/currentBoard";
import cx from "classnames";
import WinTile from "../WinTile/WinTile";

type LargeTile = {
  selfIndex: board;
};

const LargeTile: FC<LargeTile> = ({ selfIndex }) => {
  const {
    activePlayer,
    setActivePlayer,
    currentBoard,
    setCurrentBoard,
    currentMove,
    setCurrentMove,
    mainBoard,
    setMainBoard,
  } = useGameContext();
  const [board, setBoard] = useState(new Array(9).fill(0));
  const [currentTile, setCurrentTile] = useState<currentBoard>(null);

  const playerSymbol = (player: 1 | 2) => {
    if (player === 1) return "X";
    if (player === 2) return "O";
    return null;
  };

  const handleClick = (current: number) => {
    setBoard(() => {
      const newBoard = [...board];
      newBoard[current] = activePlayer;
      return newBoard;
    });
    setCurrentTile(current as currentBoard);
  };

  useEffect(() => {
    if (checkVictoryConditions(board)) {
      if (currentBoard !== null) {
        setMainBoard(() => {
          const newBoard = [...mainBoard];
          newBoard[currentBoard] = activePlayer;
          return newBoard;
        });
      }
    } else {
      setActivePlayer((currentPlayer) => (currentPlayer === 1 ? 2 : 1));
      setCurrentMove(currentTile as currentBoard);
      setCurrentBoard(currentTile as currentBoard);
    }
  }, [board, currentTile]);

  return (
    <div
      className={cx(
        "large-tile aspect-square p-6",
        {
          "bg-white":
            currentBoard === null ||
            (currentMove === selfIndex && currentBoard !== null),
        },
        {
          "pointer-events-none bg-slate-300":
            currentBoard !== selfIndex && currentBoard !== null,
        },
      )}
    >
      <div
        className={cx(
          "grid grid-cols-3 grid-rows-3 gap-1",
          {
            "bg-black": currentBoard === null || currentBoard === selfIndex,
          },
          {
            "bg-black/50": currentBoard !== selfIndex && currentBoard !== null,
          },
        )}
      >
        {mainBoard[selfIndex] === 0 &&
          board.map((t, i) => (
            <button key={i} onClick={() => handleClick(i)}>
              <Tile
                active={currentBoard === null || currentBoard === selfIndex}
                player={playerSymbol(t)}
              />
            </button>
          ))}
        {(mainBoard[selfIndex] === 1 || mainBoard[selfIndex] === 2) && (
          <WinTile
            winner={playerSymbol(mainBoard[selfIndex] as 1 | 2) as "X" | "O"}
          />
        )}
      </div>
    </div>
  );
};

export default LargeTile;
