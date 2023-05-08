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

class travelTree {
  constructor(x, y) {
    this.root = this.buildTree(x, y);
  }

  buildTree(x, y) {
    let knight = new Knight(x, y);

    if (x - 2 >= 0 && y - 1 >= 0 && gameBoard[x - 2][y - 1] == 0) {
      knight.next = this.buildTree(x - 2, y - 1);
    }
    if (x - 2 >= 0 && y + 1 <= 7 && gameBoard[x - 2][y + 1] == 0) {
      knight.next = this.buildTree(x - 2, y + 1);
    }
    if (x - 1 >= 0 && y - 2 >= 0 && gameBoard[x - 1][y - 2] == 0) {
      knight.next = this.buildTree(x - 1, y - 2);
    }
    if (x - 1 >= 0 && y + 2 <= 7 && gameBoard[x - 1][y + 2] == 0) {
      knight.next = this.buildTree(x - 1, y + 2);
    }
    if (x + 1 <= 7 && y - 2 >= 0 && gameBoard[x + 1][y - 2] == 0) {
      knight.next = this.buildTree(x + 1, y - 2);
    }
    if (x + 1 <= 7 && y + 2 <= 7 && gameBoard[x + 1][y + 2] == 0) {
      knight.next = this.buildTree(x + 1, y + 2);
    }
    if (x + 2 <= 7 && y - 1 >= 0 && gameBoard[x + 2][y - 1] == 0) {
      knight.next = this.buildTree(x + 2, y - 1);
    }
    if (x + 2 <= 7 && y + 1 <= 7 && gameBoard[x + 2][y + 1] == 0) {
      knight.next = this.buildTree(x + 2, y + 1);
    }
    return knight;
  }
}

let tree = new travelTree(7, 6);
console.log(tree.root);
console.table(gameBoard);
