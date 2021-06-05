class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(str) {
    let current = this.root;

    for (const char of str) {
      if (!current.children[char]) {
        const node = new Node(char);
        node.parent = current;
        current.children[char] = node;
      }
      current = current.children[char];
    }
    current.isEnd = true;
  }

  find(inputStr) {
    let current = this.root;

    for (const word of inputStr) {
      if (current.children[word]) {
        current = current.children[word];
      } else {
        return [];
      }
    }

    return this.getWords(current);
  }

  has(inputStr) {
    let current = this.root;
    for (const word of inputStr) {
      if (current.children[word]) {
        current = current.children[word];
      } else {
        return false;
      }
    }
    return current.isEnd;
  }

  remove(inputStr) {
    let current = this.root;
    for (const word of inputStr) {
      if (current.children[word]) {
        current = current.children[word];
      } else {
        return false;
      }
    }

    current.isEnd = false;
    while (current != this.root && Object.keys(current.children).length == 0) {
      const parent = current.parent;
      delete parent.children[current.value];
      current = parent;
    }
  }

  getWords(current) {
    const arrs = [];
    if (current.isEnd) {
      arrs.push(current.getWord());
    }
    for (const key in current.children) {
      arrs.push(...this.getWords(current.children[key]));
    }
    return arrs;
  }
}

class Node {
  constructor(value = '') {
    this.value = value;
    this.parent = null;
    this.children = {};
    this.isEnd = false;
  }

  getWord() {
    let str = '';
    let current = this;

    while (current != null) {
      str = current.value + str;
      current = current.parent;
    }

    return str;
  }
}

export default Trie;
