
const checkVictoryConditions = (gameState:(0 | 1 | 2)[]):boolean => {
for (let i = 0; i < 3; i++) {
        if (gameState[i * 3] === gameState[i * 3 + 1] && gameState[i * 3 + 1] === gameState[i * 3 + 2] && gameState[i * 3] !== 0) {
            return true; // Horizontal win
        }
        if (gameState[i] === gameState[i + 3] && gameState[i + 3] === gameState[i + 6] && gameState[i] !== 0) {
            return true; // Vertical win
        }
    }

    // Check for diagonal wins
    if ((gameState[0] === gameState[4] && gameState[4] === gameState[8] && gameState[0] !== 0) || 
        (gameState[2] === gameState[4] && gameState[4] === gameState[6] && gameState[2] !== 0)) {
        return true;
    }

    // No win found
    return false;
}

export default checkVictoryConditions;