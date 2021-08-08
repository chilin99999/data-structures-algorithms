/**
 * 條件：
 * 只能有一個root。
 * 必須有parent、child的關係。
 * child不能指向parent、child不能指向sibling。
 * 每個node只能擁有最多兩個child (left與right)。
 * left的value必須比parent小、right的value必須比parent大。
 *
 * 使用場景：
 * 1.
 *
 * Big O
 * Insertion: O(log n)
 * Searching: O(log n)
 */

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
      return;
    }

    let current = this.root;
    while (current) {
      // No duplicated node is allowed
      // We can ignore it,
      // or add 'count' property to node, and increase the number of it
      if (current.value === value) {
        return;
      }
      const side = value < current.value ? 'left' : 'right';
      if (!current[side]) {
        current[side] = node;
        return;
      }
      current = current[side];
    }
  }

  contains(value) {
    let current = this.root;
    while (current) {
      if (!current) {
        return false;
      }
      if (current.value === value) {
        return true;
      }
      const side = value < current.value ? 'left' : 'right';
      current = current[side];
    }
    return false;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export default BinarySearchTree;
