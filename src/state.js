
export default class State {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.player = 1;
    this.board = [];
    for (let i = 0; i < width; i++) {
      this.board[i] = [];
    }
  }

  isOver() {
    return false;
  }

  getTurn() {
    return 1;
  }

  getWinner() {
    return 0;
  }

  boardWidth() {
    return this.width;
  }

  boardHeight() {
    return this.height;
  }

  getBoard() {
    return this.board;
  }

  playTurn(col) {
    if (this.board[col].length === this.height) {
      console.log('Invalid move.');
      return;
    }
    this.board[col].push(this.player);
    this.player = (this.player === 1) ? 2 : 1;

  }
}