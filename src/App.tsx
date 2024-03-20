import "./App.css";
import "./index.css";
import { GameContextProvider } from "@/contexts/GameContext/GameContext";
import Board from "@/components/Board/Board";

function App() {
  return (
    <GameContextProvider>
      <div className="flex h-screen items-center justify-center bg-white">
        <Board />
      </div>
    </GameContextProvider>
  );
}

export default App;
