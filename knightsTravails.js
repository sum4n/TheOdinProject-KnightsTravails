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

// console.log(gameBoard[1][2]);

class Knight {
  constructor(x, y) {
    gameBoard[x][y] = 1;
    this.position = [x, y];
    // just one branch of next position
    this.next = null;
  }
}

class Tree {
  constructor(x, y) {
    this.root = this.buildTree(x, y);
  }

  buildTree(x, y) {
    let knight = new Knight(x, y);

    if (x - 2 >= 0 && y - 1 >= 0) {
      knight.next = this.buildTree(x - 2, y - 1);
    }
    return knight;
  }
}

let tree = new Tree(7, 6);
console.log(tree.root);
console.table(gameBoard);

function possibleMoves(x, y) {
  // if (x == 0 && y == 0) {
  //   console.log("got it");
  // }
  if (x - 2 >= 0 && y - 1 >= 0 && gameBoard[x - 2][y - 1] == 0) {
    // console.log(`1st ${x - 2}, ${y - 1}`);
    console.log([x - 2], [y - 1]);
    gameBoard[x - 2][y - 1] = 1;
    possibleMoves(x - 2, y - 1);
  }
  // if (x - 2 >= 0 && y + 1 <= 7 && gameBoard[x - 2][y + 1] == 0) {
  //   console.log([x - 2], [y + 1]);
  //   gameBoard[x - 2][y + 1] = 1;
  //   possibleMoves(x - 2, y + 1);
  // }
  // if (x - 1 >= 0 && y - 2 >= 0 && gameBoard[x - 1][y - 2] == 0) {
  //   console.log([x - 1], [y - 2]);
  //   gameBoard[x - 1][y - 2] = 1;
  //   possibleMoves(x - 1, y - 2);
  // }
  // if (x - 1 >= 0 && y + 2 <= 7 && gameBoard[x - 1][y + 2] == 0) {
  //   console.log([x - 1], [y + 2]);
  //   gameBoard[x - 1][y + 2] = 1;
  //   possibleMoves(x - 1, y + 2);
  // }
  // if (x + 1 <= 7 && y - 2 >= 0 && gameBoard[x + 1][y - 2] == 0) {
  //   console.log([x + 1], [y - 2]);
  //   gameBoard[x + 1][y - 2] = 1;
  //   possibleMoves(x + 1, y - 2);
  // }
  // if (x + 1 <= 7 && y + 1 <= 7 && gameBoard[x + 1][y + 1] == 0) {
  //   console.log([x + 1], [y + 2]);
  //   gameBoard[x + 1][y + 1] = 1;
  //   possibleMoves(x + 1, y + 2);
  // }
  // if (x + 2 <= 7 && y - 1 >= 0 && gameBoard[x + 2][y - 1] == 0) {
  //   console.log([x + 2], [y - 1]);
  //   gameBoard[x + 2][y - 1] = 1;
  //   possibleMoves(x + 2, y - 1);
  // }
  // if (x + 2 <= 7 && y + 1 <= 7 && gameBoard[x + 2][y + 1] == 0) {
  //   console.log([x + 2], [y + 1]);
  //   gameBoard[x + 2][y + 1] = 1;
  //   possibleMoves(x + 2, y + 1);
  // }
}

// possibleMoves(5, 0);
// console.log(gameBoard);
