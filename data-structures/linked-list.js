class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * O(1)
   * @param {Any} value
   * @return {Node}
   */
  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length += 1;

    return node;
  }

  /**
   * O(n)
   * @return {Node}
   */
  pop() {
    if (!this.head) {
      return null;
    }
    let pre = null;
    let current = this.head;
    while (current.next) {
      pre = current;
      current = current.next;
    }
    this.tail = pre;
    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null;
    }
    this.length -= 1;

    return current;
  }

  /**
   * O(1)
   * @return {Node}
   */
  shift() {
    if (!this.head) {
      return this;
    }
    const node = this.head;
    this.head = this.head.next;
    this.length -= 1;
    if (this.length == 0) {
      this.tail = null;
    }
    return node;
  }

  /**
   * O(1)
   * @param {Any} value
   * @return {Node}
   */
  unshift(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length += 1;
    if (this.length == 1) {
      this.tail = node;
    }
    return node;
  }

  /**
   * O(n)
   * @param {Number} index
   * @return {Node}
   */
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let current = this.head;
    for (let i = 0; i < index && current.next; i++) {
      current = current.next;
    }
    return current;
  }

  /**
   * O(n)
   * @param {Number} index
   * @param {Any} value
   * @return {Node}
   */
  set(index, value) {
    const node = this.get(index);
    if (node) {
      node.value = value;
      return node;
    }
    return null;
  }

  /**
   * O(n)
   * @param {Number} index
   * @param {Any} value
   * @return {Node}
   */
  insert(index, value) {
    if (index == 0) {
      return this.unshift(value);
    }
    if (index == this.length) {
      return this.push(value);
    }
    const prevNode = this.get(index - 1);
    if (prevNode) {
      const newNode = new Node(value);
      newNode.next = prevNode.next;
      prevNode.next = newNode;
      this.length += 1;
      return newNode;
    }
    return null;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    if (index == 0) {
      return this.shift();
    }
    if (index == this.length - 1) {
      return this.pop();
    }
    const prevNode = this.get(index - 1);
    const node = prevNode.next;
    prevNode.next = node.next;
    this.length -= 1;

    return node;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export default LinkedList;
