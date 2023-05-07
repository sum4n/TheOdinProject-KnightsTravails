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

console.log(gameBoard[1][2]);

class Knight {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

let knight = new Knight(0, 0);
console.log(knight);

function possibleMoves(x, y) {
  if (x - 2 >= 0 && y - 1 >= 0 && gameBoard[x - 2][y - 1] == 0) {
    // console.log(`1st ${x - 2}, ${y - 1}`);
    console.log([x - 2], [y - 1]);
    gameBoard[x - 2][y - 1] = 1;
    possibleMoves(x - 2, y - 1);
  }
  if (x - 2 >= 0 && y + 1 <= 7 && gameBoard[x - 2][y + 1] == 0) {
    console.log([x - 2], [y + 1]);
    gameBoard[x - 2][y + 1] = 1;
    possibleMoves(x - 2, y + 1);
  }
  if (x - 1 >= 0 && y - 2 >= 0 && gameBoard[x - 1][y - 2] == 0) {
    console.log([x - 1], [y - 2]);
    gameBoard[x - 1][y - 2] = 1;
    possibleMoves(x - 1, y - 2);
  }
  if (x - 1 >= 0 && y + 2 <= 7 && gameBoard[x - 1][y + 2] == 0) {
    console.log([x - 1], [y + 2]);
    gameBoard[x - 1][y + 2] = 1;
    possibleMoves(x - 1, y + 2);
  }
  if (x + 1 <= 7 && y - 2 >= 0 && gameBoard[x + 1][y - 2] == 0) {
    console.log([x + 1], [y - 2]);
    gameBoard[x + 1][y - 2] = 1;
    possibleMoves(x + 1, y - 2);
  }
  if (x + 1 <= 7 && y + 1 <= 7 && gameBoard[x + 1][y + 1] == 0) {
    console.log([x + 1], [y + 2]);
    gameBoard[x + 1][y + 1] = 1;
    possibleMoves(x + 1, y + 2);
  }
  if (x + 2 <= 7 && y - 1 >= 0 && gameBoard[x + 2][y - 1] == 0) {
    console.log([x + 2], [y - 1]);
    gameBoard[x + 2][y - 1] = 1;
    possibleMoves(x + 2, y - 1);
  }
  if (x + 2 <= 7 && y + 1 <= 7 && gameBoard[x + 2][y + 1] == 0) {
    console.log([x + 2], [y + 1]);
    gameBoard[x + 2][y + 1] = 1;
    possibleMoves(x + 2, y + 1);
  }
}

possibleMoves(3, 3);
// console.log(gameBoard);
