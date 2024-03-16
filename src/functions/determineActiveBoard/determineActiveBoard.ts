import { currentBoard } from "@/types/currentBoard";

interface determineActiveBoard {
    currentBoard: currentBoard;
    currentMove: currentBoard;

}
const determineActiveBoard = ({currentBoard, currentMove}:determineActiveBoard): currentBoard => {
    if(currentBoard === 4) {
        if (currentMove === 0) {
            return 0;
        } else if (currentMove === 1) {
            return 1;
        } else if (currentMove === 2) {
            return 2;
        } else if (currentMove === 3) {
            return 3;
        } else if (currentMove === 4) {
            return 4;
        } else if (currentMove === 5) {
            return 5;
        } else if (currentMove === 6) {
            return 6;
        } else if (currentMove === 7) {
            return 7;
        } else if (currentMove === 8) {
            return 8;
        }
    }

    return 8;
};

export default determineActiveBoard;