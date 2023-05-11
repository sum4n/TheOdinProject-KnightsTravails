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
  constructor(arr) {
    gameBoard[arr[0]][arr[1]] = 1;
    this.position = arr;
    // just one branch of next position
    this.next = [];

    if (
      arr[0] - 2 >= 0 &&
      arr[1] - 1 >= 0 &&
      gameBoard[arr[0] - 2][arr[1] - 1] == 0
    ) {
      this.next.push([arr[0] - 2, arr[1] - 1]);
      gameBoard[arr[0] - 2][arr[1] - 1] = 1;
    }
    if (
      arr[0] - 2 >= 0 &&
      arr[1] + 1 <= 7 &&
      gameBoard[arr[0] - 2][arr[1] + 1] == 0
    ) {
      this.next.push([arr[0] - 2, arr[1] + 1]);
      gameBoard[arr[0] - 2][arr[1] + 1] = 1;
    }
    if (
      arr[0] - 1 >= 0 &&
      arr[1] - 2 >= 0 &&
      gameBoard[arr[0] - 1][arr[1] - 2] == 0
    ) {
      this.next.push([arr[0] - 1, arr[1] - 2]);
      gameBoard[arr[0] - 1][arr[1] - 2] = 1;
    }
    if (
      arr[0] - 1 >= 0 &&
      arr[1] + 2 <= 7 &&
      gameBoard[arr[0] - 1][arr[1] + 2] == 0
    ) {
      this.next.push([arr[0] - 1, arr[1] + 2]);
      gameBoard[arr[0] - 1][arr[1] + 2] = 1;
    }
    if (
      arr[0] + 1 <= 7 &&
      arr[1] - 2 >= 0 &&
      gameBoard[arr[0] + 1][arr[1] - 2] == 0
    ) {
      this.next.push([arr[0] + 1, arr[1] - 2]);
      gameBoard[arr[0] + 1][arr[1] - 2] = 1;
    }
    if (
      arr[0] + 1 <= 7 &&
      arr[1] + 2 <= 7 &&
      gameBoard[arr[0] + 1][arr[1] + 2] == 0
    ) {
      this.next.push([arr[0] + 1, arr[1] + 2]);
      gameBoard[arr[0] + 1][arr[1] + 2] = 1;
    }
    if (
      arr[0] + 2 <= 7 &&
      arr[1] - 1 >= 0 &&
      gameBoard[arr[0] + 2][arr[1] - 1] == 0
    ) {
      this.next.push([arr[0] + 2, arr[1] - 1]);
      gameBoard[arr[0] + 2][arr[1] - 1] = 1;
    }
    if (
      arr[0] + 2 <= 7 &&
      arr[1] + 1 <= 7 &&
      gameBoard[arr[0] + 2][arr[1] + 1] == 0
    ) {
      this.next.push([arr[0] + 2, arr[1] + 1]);
      gameBoard[arr[0] + 2][arr[1] + 1] = 1;
    }
  }
}

class travelTree {
  constructor(arr) {
    this.root = this.buildTree(arr);
  }

  buildTree(array) {
    let knight = new Knight(array);

    console.log(knight);
    console.log(knight.position);

    // if (knight.position[0] == 0 && (knight.position[1] = 4)) return knight;

    return knight;
  }
}

let tree = new travelTree([3, 3]);
console.log();
console.log(tree.root);
console.table(gameBoard);
