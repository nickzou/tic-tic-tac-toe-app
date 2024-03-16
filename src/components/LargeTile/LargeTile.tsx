import { FC, useEffect, useState } from "react";
import Tile from "../Tile/Tile";
import checkVictoryConditions from "@/functions/checkVictoryConditions/checkVictoryConditions";
import { useGameContext } from "@/contexts/GameContext/GameContext";
import { board, currentBoard } from "@/types/currentBoard";
import cx from "classnames";

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
  const [winner, setWinner] = useState<1 | 2 | null>(null);

  const playerSymbol = (player: 1 | 2) => {
    if (player === 1) return "X";
    if (player === 2) return "O";
    return null;
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
      setWinner(activePlayer);
    } else {
      setActivePlayer((currentPlayer) => (currentPlayer === 1 ? 2 : 1));
    }
  }, [board]);

  useEffect(() => {
    if (winner !== null) {
      console.log("someone has won!");
    }
  }, [winner]);

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
          "bg-slate-300 pointer-events-none":
            currentBoard !== selfIndex && currentBoard !== null,
        }
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
          }
        )}
      >
        {board.map((t, i) => (
          <button
            key={i}
            onClick={() => {
              setBoard(() => {
                const newBoard = [...board];
                newBoard[i] = activePlayer;
                return newBoard;
              });
              setCurrentMove(i as currentBoard);
              setCurrentBoard(i as currentBoard);
            }}
          >
            <Tile
              active={currentBoard === null || currentBoard === selfIndex}
              player={playerSymbol(t)}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default LargeTile;
