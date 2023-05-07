let gameBoard = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

// console.log(gameBoard[3][3]);

class Knight {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

let knight = new Knight(0, 0);
console.log(knight);

function possibleMoves(x, y) {
  if (x - 2 >= 0 && y - 1 >= 0) {
    console.log([x - 2], [y - 1]);
  }
  if (x - 2 >= 0 && y + 1 <= 7) {
    console.log([x - 2], [y + 1]);
  }
  if (x - 1 >= 0 && y - 2 >= 0) {
    console.log([x - 1], [y - 2]);
  }
  if (x - 1 >= 0 && y + 2 <= 7) {
    console.log([x - 1], [y + 2]);
  }
  if (x + 1 <= 7 && y - 2 >= 0) {
    console.log([x + 1], [y - 2]);
  }
  if (x + 1 <= 7 && y + 1 <= 7) {
    console.log([x + 1], [y + 2]);
  }
  if (x + 2 <= 7 && y - 1 >= 0) {
    console.log([x + 2], [y - 1]);
  }
  if (x + 2 <= 7 && y + 1 <= 7) {
    console.log([x + 2], [y + 1]);
  }
}

possibleMoves(0, 0);
