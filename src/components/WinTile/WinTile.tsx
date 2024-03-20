import X from "@/icons/X/X";
import O from "@/icons/O/O";
import { FC } from "react";

type Props = {
  winner: "X" | "O";
};

const WinTile: FC<Props> = ({ winner }) => {
  return (
    <div className="col-span-3 row-span-3 bg-white">
      {winner === "X" && <X />}
      {winner === "O" && <O />}
    </div>
  );
};

export default WinTile;
