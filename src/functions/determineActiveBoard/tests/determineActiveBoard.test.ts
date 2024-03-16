import { expect, test, describe } from "vitest";
import determineActiveBoard from "../determineActiveBoard";

describe('return corresponding directions for middle board', () => {
  const testCases = [
    { currentBoard: 4, currentMove: 0, expected: 0 },
    { currentBoard: 4, currentMove: 1, expected: 1 },
    { currentBoard: 4, currentMove: 2, expected: 2 },
    { currentBoard: 4, currentMove: 3, expected: 3 },
    { currentBoard: 4, currentMove: 4, expected: 4 },
    { currentBoard: 4, currentMove: 5, expected: 5 },
    { currentBoard: 4, currentMove: 6, expected: 6 },
    { currentBoard: 4, currentMove: 7, expected: 7 },
    { currentBoard: 4, currentMove: 8, expected: 8 },
  ];

  testCases.forEach(({ currentBoard, currentMove, expected }) => {
    test(`return ${expected} if current board is the middle board (${currentBoard}) and the move is the first tile (${currentMove})`, () => {
      expect(determineActiveBoard({ currentBoard, currentMove })).toBe(expected);
    });
  });
});

describe('return corresponding directions for top-left board', () => {
  const testCases = [
    { currentBoard: 0, currentMove: 0, expected: 0 },
    { currentBoard: 0, currentMove: 1, expected: 1 },
    { currentBoard: 0, currentMove: 2, expected: 2 },
    { currentBoard: 0, currentMove: 3, expected: 3 },
    { currentBoard: 0, currentMove: 4, expected: 4 },
    { currentBoard: 0, currentMove: 5, expected: 5 },
    { currentBoard: 0, currentMove: 6, expected: 6 },
    { currentBoard: 0, currentMove: 7, expected: 7 },
    { currentBoard: 0, currentMove: 8, expected: 8 },
  ];

  testCases.forEach(({ currentBoard, currentMove, expected }) => {
    test(`return ${expected} if current board is the middle board (${currentBoard}) and the move is the first tile (${currentMove})`, () => {
      expect(determineActiveBoard({ currentBoard, currentMove })).toBe(expected);
    });
  });
});