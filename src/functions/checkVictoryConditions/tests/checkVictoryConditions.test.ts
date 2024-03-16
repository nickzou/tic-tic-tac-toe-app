// sum.test.js
import { expect, test } from 'vitest'
import checkVictoryConditions from './../checkVictoryConditions';

test('initial game state does not equal victory for either player', () => {
    const initialBoard = new Array(9).fill(0);
  expect(checkVictoryConditions(initialBoard)).toBe(false)
})

test('if the first three values are equal to 1, return true', () => {
    const initialBoard:(0|1|2)[] = [1,1,1,0,0,0,0,0,0];
  expect(checkVictoryConditions(initialBoard)).toBe(true)
})