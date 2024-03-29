import checkVictoryConditions from "@/functions/checkVictoryConditions/checkVictoryConditions";
import { currentBoard } from "@/types/currentBoard";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";
import playerSymbol from "@/functions/playerSymbol/playerSymbol";

type GameContextType = {
  activePlayer: 1 | 2;
  setActivePlayer: Dispatch<SetStateAction<1 | 2>>;
  mainBoard: (0 | 1 | 2)[];
  setMainBoard: Dispatch<SetStateAction<(0 | 1 | 2)[]>>;
  currentBoard: currentBoard;
  setCurrentBoard: Dispatch<SetStateAction<currentBoard>>;
  currentMove: currentBoard;
  setCurrentMove: Dispatch<SetStateAction<currentBoard>>;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameContextProvider = ({ children }: { children: ReactNode }) => {
  const [activePlayer, setActivePlayer] = useState<1 | 2>(1);
  const [mainBoard, setMainBoard] = useState<(0 | 1 | 2)[]>(
    new Array(9).fill(0),
  );
  const [currentBoard, setCurrentBoard] = useState<currentBoard>(null);
  const [currentMove, setCurrentMove] = useState<currentBoard>(null);
  const [winner, setWinner] = useState<1 | 2 | null>(null);

  useEffect(() => {
    if (checkVictoryConditions(mainBoard)) {
      setWinner(activePlayer);
      console.log(`${playerSymbol(activePlayer)} wins!`);
    }
  }, [mainBoard]);

  const value = {
    activePlayer,
    setActivePlayer,
    mainBoard,
    setMainBoard,
    currentBoard,
    setCurrentBoard,
    currentMove,
    setCurrentMove,
    winner,
    setWinner,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default GameContext;
