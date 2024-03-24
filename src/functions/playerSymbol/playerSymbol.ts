const playerSymbol = (player: 1 | 2) => {
    if (player === 1) return "X";
    if (player === 2) return "O";
    return null;
  };

export default playerSymbol;