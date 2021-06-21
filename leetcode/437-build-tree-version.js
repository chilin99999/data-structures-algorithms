/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
let count = 0;
var pathSum = function (arr, targetSum) {
  count = 0;
  const tree = new Tree();
  tree.build(arr);
  findValue(tree.root, targetSum);
  return count;
};

class Tree {
  constructor() {
    this.root = null;
  }

  build(arr) {
    const rootValue = arr.shift();
    this.root = new Node(rootValue);
    const nodeArr = [this.root];

    while (arr.length > 0) {
      const current = nodeArr.shift();
      if (current && current.val == null) {
        continue;
      }

      const leftValue = arr.shift();
      const leftNode = new Node(leftValue);
      current.left = leftNode;
      nodeArr.push(leftNode);

      const rightValue = arr.shift();
      const rightNode = new Node(rightValue);
      current.right = rightNode;
      nodeArr.push(rightNode);
    }
  }
}

class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

function findValue(current, targetSum, sum) {
  if (!current || current.val == null) {
    return;
  }
  const newSum = current.val + (sum || 0);
  if (newSum == targetSum) {
    count += 1;
  }
  if (sum == null) {
    // 設置起點
    findValue(current.left, targetSum);
    findValue(current.right, targetSum);
  }
  findValue(current.left, targetSum, newSum);
  findValue(current.right, targetSum, newSum);
}

// let result;

// result = pathSum([10, 5, -3, 3, 2, null, 11, 3, -2, null, 1], 8);
// console.log(result); // 3

// result = pathSum([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1], 22);
// console.log(result); // 3

// result = pathSum([1, null, 2, null, 3, null, 4, null, 5], 3);
// console.log(result); // 2

// result = pathSum([0, 1, 1], 1);
// console.log(result); // 4

// result = pathSum([1, -2, -3, 1, 3, -2, null, -1], -1);
// console.log(result); // 4
