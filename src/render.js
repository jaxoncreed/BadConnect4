
export default function render(state) {
  for (let i = state.boardHeight() - 1; i >= 0; i--) {
    let string = '';
    for (let j = 0; j < state.boardWidth(); j++) {
      if (state.getBoard()[j][i]) {
        string += (state.getBoard()[j][i] === 1) ? 'X ' : 'O ';
      } else {
        string += '- ';
      }
    }
    console.log(string);
  }
}