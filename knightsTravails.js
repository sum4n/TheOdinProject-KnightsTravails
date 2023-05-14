// need gameboard to track which place a knight has alredy
// visited, a knight will not visit same place twice.
// the visited 0 turns into 1. After each function call, the gabeBoard
// will be reset by the knightMoves() function.
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

// Each Node will be a Knight with parent attribute which tracks from where it
// came and with name attribute.

// Added parent attribute to back track the knight's path.
// This data structure is like a linked list but it has parent to backtrack.
// Is it directed acyclic graph?
class Node {
  constructor(parent, data) {
    this.parent = parent;
    this.name = data;
  }
}

// Each Knight will have its position and its parent to track its path.

// Each Knight will mark its position on the gameBoard so that no other
// Knight can go there or be created on that position.

// Each Knight will point to its next moves which will be saved into
// this.next = [] list to create more Knights recursivly.

// Knight's next move will no take position where there was a Knight before and
// it will also have a parent element to track from where the next move is
// originated.

// Knight's next moves will be used to recursively create node and knights, that
// is why each next move is created with 'parent' and 'data' attribute to be
// used to make a Node.

// move() logic : A Knight's next move can have maximum 8 possibilties, so Knight
// will travel at all the possible locations restricted by its 2&half movement and
// aviailabilty of gameBoard's position. Knight will not move outside of the gameBoard.

class Knight {
  constructor(arr, parent = null) {
    gameBoard[arr[0]][arr[1]] = 1;
    this.position = arr;
    this.parent = new Node(parent, arr);
    this.next = [];
  }

  move(arr = this.position) {
    if (
      arr[0] - 2 >= 0 &&
      arr[1] - 1 >= 0 &&
      gameBoard[arr[0] - 2][arr[1] - 1] == 0
    ) {
      this.next.push([this.parent, [arr[0] - 2, arr[1] - 1]]);
      gameBoard[arr[0] - 2][arr[1] - 1] = 1;
    }
    if (
      arr[0] - 2 >= 0 &&
      arr[1] + 1 <= 7 &&
      gameBoard[arr[0] - 2][arr[1] + 1] == 0
    ) {
      this.next.push([this.parent, [arr[0] - 2, arr[1] + 1]]);
      gameBoard[arr[0] - 2][arr[1] + 1] = 1;
    }
    if (
      arr[0] - 1 >= 0 &&
      arr[1] - 2 >= 0 &&
      gameBoard[arr[0] - 1][arr[1] - 2] == 0
    ) {
      this.next.push([this.parent, [arr[0] - 1, arr[1] - 2]]);
      gameBoard[arr[0] - 1][arr[1] - 2] = 1;
    }
    if (
      arr[0] - 1 >= 0 &&
      arr[1] + 2 <= 7 &&
      gameBoard[arr[0] - 1][arr[1] + 2] == 0
    ) {
      this.next.push([this.parent, [arr[0] - 1, arr[1] + 2]]);
      gameBoard[arr[0] - 1][arr[1] + 2] = 1;
    }
    if (
      arr[0] + 1 <= 7 &&
      arr[1] - 2 >= 0 &&
      gameBoard[arr[0] + 1][arr[1] - 2] == 0
    ) {
      this.next.push([this.parent, [arr[0] + 1, arr[1] - 2]]);
      gameBoard[arr[0] + 1][arr[1] - 2] = 1;
    }
    if (
      arr[0] + 1 <= 7 &&
      arr[1] + 2 <= 7 &&
      gameBoard[arr[0] + 1][arr[1] + 2] == 0
    ) {
      this.next.push([this.parent, [arr[0] + 1, arr[1] + 2]]);
      gameBoard[arr[0] + 1][arr[1] + 2] = 1;
    }
    if (
      arr[0] + 2 <= 7 &&
      arr[1] - 1 >= 0 &&
      gameBoard[arr[0] + 2][arr[1] - 1] == 0
    ) {
      this.next.push([this.parent, [arr[0] + 2, arr[1] - 1]]);
      gameBoard[arr[0] + 2][arr[1] - 1] = 1;
    }
    if (
      arr[0] + 2 <= 7 &&
      arr[1] + 1 <= 7 &&
      gameBoard[arr[0] + 2][arr[1] + 1] == 0
    ) {
      this.next.push([this.parent, [arr[0] + 2, arr[1] + 1]]);
      gameBoard[arr[0] + 2][arr[1] + 1] = 1;
    }
  }
}

// Using queue to travel.
// Moves from Knight's next move array will be used to travel.
// Here I used queue.
// A next move array with next moves will be inputted.
// If it has item, the code will continue.
// The first item from the array will be used as new Node and new Knight and
// its next moves will be pushed into next moves array (queue) and the first
// move will be removed (dequeue).
// Keep calling the travel() with the next array's first item, add its next
// into the queue/array and  delete/dequeue the first item, so that 2nd item
// becomes first item until the array is empty or we get the TARGET NODE.

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

// This function only takes 2 arrays and makes first node and knight; and
// send them to travel() function to receive the result.
// Here We reset the gameBoard.
function knightMoves(inputArray, resultArray) {
  let node = new Node(null, inputArray);

  let knight = new Knight(node.name);
  knight.move();
  let array = knight.next;

  let targetNode = travel(node, array, resultArray);

  // console.log(targetNode);

  let resultList = printName(targetNode);

  // reset gameBoard
  gameBoard = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ];

  console.log(
    `=> You made it in ${resultList.length - 1} moves! Here's your path:`
  );

  for (let i = resultList.length - 1; i >= 0; i--) {
    console.log(resultList[i]);
  }
}

// The result node is convered into list through recurssion.
function printName(node, list = []) {
  list.push(node.name);

  if (node.parent == null) return;
  printName(node.parent, list);

  return list;
}

knightMoves([3, 3], [0, 1]);
knightMoves([3, 3], [5, 1]);
