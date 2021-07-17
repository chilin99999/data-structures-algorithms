/**
 * FIFO - First In First Out
 * 概念：排隊買東西，最先排隊的可以最先購買
 *
 * 使用場景：
 * 1. Ticketing system
 * 2. Printer
 * 3. Javascript task queue
 *
 * Big O
 * Insertion: O(1)
 * Removal: O(1)
 * Searching: O(n)
 * Access: O(n)
 */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    const node = new Node(value);
    if (!this.first) {
      this.first = node;
      this.last = node;
    }
    else {
      this.last.next = node;
      this.last = node;
    }
    this.size += 1;

    return this.size; 
  }

  dequeue() {
    if (!this.first) {
      return null;
    }
    const node = this.first;
    this.first = this.first.next;
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

export default Queue;
