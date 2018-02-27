import readlineSync from 'readline-sync';

import State from './state';
import render from './render';

const state = new State(7, 6);

while (!state.isOver()) {
  const options = [];
  for (let i = 0; i < state.boardWidth(); i++) {
    options.push(i + 1);
  }
  const col = readlineSync.keyInSelect(options,`Player ${state.getTurn()} it is your turn. Select a number between 1 and 7.`);
  if (col === -1) {
    break;
  }
  state.playTurn(col);
  render(state);
}

if (state.isOver()) {
  console.log(`Player ${state.getWinner()} has won!`);
} else {
  console.log('Goodbye');
}