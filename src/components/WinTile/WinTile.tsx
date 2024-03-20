import X from "@/icons/X/X";
import O from "@/icons/O/O";
import { FC } from "react";
import { motion } from "framer-motion";
import fadeIn from "@/variables/fadeIn";

type Props = {
  winner: "X" | "O";
};

const WinTile: FC<Props> = ({ winner }) => {
  return (
    <div className="col-span-3 row-span-3 bg-white">
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={fadeIn}
      >
        {winner === "X" && <X />}
        {winner === "O" && <O />}
      </motion.div>
    </div>
  );
};

export default WinTile;
