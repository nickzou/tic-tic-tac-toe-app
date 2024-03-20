import O from "@/icons/O/O";
import X from "@/icons/X/X";
import { FC } from "react";
import cx from "classnames";
import { motion } from "framer-motion";

type Props = {
  active: boolean;
  player: "X" | "O" | null;
};

const Tile: FC<Props> = ({ active, player }) => {
  const svgVariants = {
    hidden: { opacity: 0, scale: 0.5 }, // Start with the SVGs being transparent and scaled down
    visible: { opacity: 1, scale: 1 }, // Animate to fully visible and scaled normally
  };

  return (
    <div
      className={cx(
        "tile aspect-square h-full w-full rounded-none p-6   [&_svg]:h-full [&_svg]:w-full [&_svg_*]:h-full [&_svg_*]:w-full",
        {
          "bg-white transition-[background] duration-200": active,
        },
        {
          "bg-slate-300 transition-[background] duration-200 [&_svg_*]:stroke-black/50":
            !active,
        },
      )}
    >
      {player === "X" && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={svgVariants}
          transition={{ duration: 0.2 }}
        >
          <X />
        </motion.div>
      )}
      {player === "O" && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={svgVariants}
          transition={{ duration: 0.2 }}
        >
          <O />
        </motion.div>
      )}
    </div>
  );
};

export default Tile;
