/**
 * LIFO - Last In First Out
 * 概念：打開抽屜有一疊書，想拿書只能從最上面拿
 *
 * 使用場景：
 * 1. Javascript event call stack
 * 2. Undo feature
 * 3. Browser routing history
 *
 * Big O
 * Insertion: O(1)
 * Removal: O(1)
 * Searching: O(n)
 * Access: O(n)
 */

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.size += 1;

    return this.size;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    const node = this.top;
    this.top = this.top.next;
    this.size -= 1;

    return node.value;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export default Stack;
