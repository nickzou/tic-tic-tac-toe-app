import "./App.css";
import "./index.css";
import LargeTile from "@/components/LargeTile/LargeTile";
import { GameContextProvider } from "@/contexts/GameContext/GameContext";
import Board from "@/components/Board/Board";

function App() {
  return (
    <GameContextProvider>
      <div className="bg-white h-screen flex justify-center items-center">
        <Board />
      </div>
    </GameContextProvider>
  );
}

export default App;
