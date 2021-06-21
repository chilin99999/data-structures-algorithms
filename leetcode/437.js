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
var pathSum = function (root, targetSum) {
  count = 0;
  findValue(root, targetSum);
  return count;
};

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
