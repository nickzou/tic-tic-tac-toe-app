import { FC } from "react";
import LargeTile from "../LargeTile/LargeTile";
import { useGameContext } from "@/contexts/GameContext/GameContext";
import cx from "classnames";
import { board } from "@/types/currentBoard";

const Board: FC = () => {
  const { currentBoard, currentMove, mainBoard } = useGameContext();
  return (
    <div
      className={cx(
        "board grid aspect-square h-full grid-cols-3 grid-rows-3 gap-2 bg-black",
        { "pointer-events-none": currentBoard !== currentMove },
      )}
    >
      {mainBoard.map((t, i) => (
        <LargeTile key={i} selfIndex={i as board} />
      ))}
    </div>
  );
};

export default Board;
