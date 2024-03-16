import O from "@/icons/O/O";
import X from "@/icons/X/X";
import { FC } from "react";
import cx from "classnames";

type Props = {
  active: boolean;
  player: "X" | "O" | null;
};

const Tile: FC<Props> = ({ active, player }) => {
  return (
    <div
      className={cx(
        "tile h-full w-full rounded-none [&_svg_*]:h-full [&_svg_*]:w-full [&_svg]:w-full [&_svg]:h-full aspect-square p-6",
        { "bg-white": active },
        { "bg-slate-300 [&_svg_*]:stroke-black/50": !active }
      )}
    >
      {player === "X" && <X />}
      {player === "O" && <O />}
    </div>
  );
};

export default Tile;
