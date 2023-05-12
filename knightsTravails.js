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

class Node {
  constructor(parent, data) {
    this.parent = parent;
    this.name = data;
  }
}

class Knight {
  constructor(arr, parent = null) {
    gameBoard[arr[0]][arr[1]] = 1;
    this.position = arr;
    this.parent = new Node(parent, arr);
    // just one branch of next position
    this.next = [];
  }

  move(arr = this.position) {
    if (
      arr[0] - 2 >= 0 &&
      arr[1] - 1 >= 0 &&
      gameBoard[arr[0] - 2][arr[1] - 1] == 0
    ) {
      // let node = new Knight([arr[0] - 2, arr[1] - 1], arr);
      this.next.push([this.parent, [arr[0] - 2, arr[1] - 1]]);
      // this.next.push(node);
      gameBoard[arr[0] - 2][arr[1] - 1] = 1;
    }
    if (
      arr[0] - 2 >= 0 &&
      arr[1] + 1 <= 7 &&
      gameBoard[arr[0] - 2][arr[1] + 1] == 0
    ) {
      this.next.push([this.parent, [arr[0] - 2, arr[1] + 1]]);
      // let node = new Knight([arr[0] - 2, arr[1] + 1], arr);
      // this.next.push(node);
      gameBoard[arr[0] - 2][arr[1] + 1] = 1;
    }
    if (
      arr[0] - 1 >= 0 &&
      arr[1] - 2 >= 0 &&
      gameBoard[arr[0] - 1][arr[1] - 2] == 0
    ) {
      // let node = new Knight([arr[0] - 1, arr[1] - 2], arr);
      // this.next.push(node);
      this.next.push([this.parent, [arr[0] - 1, arr[1] - 2]]);
      gameBoard[arr[0] - 1][arr[1] - 2] = 1;
    }
    if (
      arr[0] - 1 >= 0 &&
      arr[1] + 2 <= 7 &&
      gameBoard[arr[0] - 1][arr[1] + 2] == 0
    ) {
      // let node = new Knight([arr[0] - 1, arr[1] + 2], arr);
      // this.next.push(node);
      this.next.push([this.parent, [arr[0] - 1, arr[1] + 2]]);
      gameBoard[arr[0] - 1][arr[1] + 2] = 1;
    }
    if (
      arr[0] + 1 <= 7 &&
      arr[1] - 2 >= 0 &&
      gameBoard[arr[0] + 1][arr[1] - 2] == 0
    ) {
      // let node = new Knight([arr[0] + 1, arr[1] - 2], arr);
      // this.next.push(node);
      this.next.push([this.parent, [arr[0] + 1, arr[1] - 2]]);
      gameBoard[arr[0] + 1][arr[1] - 2] = 1;
    }
    if (
      arr[0] + 1 <= 7 &&
      arr[1] + 2 <= 7 &&
      gameBoard[arr[0] + 1][arr[1] + 2] == 0
    ) {
      // let node = new Knight([arr[0] + 1, arr[1] + 2], arr);
      // this.next.push(node);
      this.next.push([this.parent, [arr[0] + 1, arr[1] + 2]]);
      gameBoard[arr[0] + 1][arr[1] + 2] = 1;
    }
    if (
      arr[0] + 2 <= 7 &&
      arr[1] - 1 >= 0 &&
      gameBoard[arr[0] + 2][arr[1] - 1] == 0
    ) {
      // let node = new Knight([arr[0] + 2, arr[1] - 1], arr);
      // this.next.push(node);
      this.next.push([this.parent, [arr[0] + 2, arr[1] - 1]]);
      gameBoard[arr[0] + 2][arr[1] - 1] = 1;
    }
    if (
      arr[0] + 2 <= 7 &&
      arr[1] + 1 <= 7 &&
      gameBoard[arr[0] + 2][arr[1] + 1] == 0
    ) {
      // let node = new Knight([arr[0] + 2, arr[1] + 1], arr);
      // this.next.push(node);
      this.next.push([this.parent, [arr[0] + 2, arr[1] + 1]]);
      gameBoard[arr[0] + 2][arr[1] + 1] = 1;
    }
  }
}

// let node = new Node(null, [3, 3]);
// console.log(node);

// let knight = new Knight(node.name);
// knight.move();
// let array = knight.next;

// using queue to travel
function travel(node, array, result) {
  if (array.length != 0) {
    if (node.name[0] == result[0] && node.name[1] == result[1]) {
      // console.log(node);
      return node;
    }
    let node1 = new Node(array[0][0], array[0][1]);
    // console.log(node1);

    let knight1 = new Knight(node1.name, node1.parent);
    knight1.move();
    // console.log(knight1.next);
    // console.log();

    array.push(...knight1.next);

    array.shift();

    return travel(node1, array, result);
  }
}

// let result = travel(node, array);
// console.log(result);

// console.table(gameBoard);

function knightMoves(inputArray, resultArray) {
  let node = new Node(null, inputArray);

  let knight = new Knight(node.name);
  knight.move();
  let array = knight.next;

  let targetNode = travel(node, array, resultArray);

  console.log(targetNode);
}

knightMoves([3, 3], [4, 3]);
