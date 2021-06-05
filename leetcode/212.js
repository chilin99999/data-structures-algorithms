/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  const xLength = board.length;
  const yLength = board[0].length;
  const trie = new Trie();

  const wordsMapping = {};
  words.forEach((word) => {
    trie.insert(word);
    wordsMapping[word] = false;
  });

  function traverse(x, y, str, mark = {}) {
    mark = Object.assign({}, mark);
    const key = `${x}-${y}`;
    if (
      mark[key] ||
      x < 0 ||
      y < 0 ||
      x >= board.length ||
      y >= board[0].length
    ) {
      return;
    }
    mark[key] = true;

    str += board[x][y];
    const trieResult = trie.has(str);
    if (trieResult == -1) return;

    if (trieResult == 1) {
      wordsMapping[str] = true;
      trie.remove(str);
    }
    traverse(x + 1, y, str, mark);
    traverse(x - 1, y, str, mark);
    traverse(x, y + 1, str, mark);
    traverse(x, y - 1, str, mark);
  }

  for (let i = 0; i < xLength; i++) {
    for (let j = 0; j < yLength; j++) {
      traverse(i, j, '');
    }
  }

  return words.filter((word) => wordsMapping[word]);
};

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

  has(inputStr) {
    let current = this.root;
    for (const word of inputStr) {
      if (current.children[word]) {
        current = current.children[word];
      } else {
        return -1;
      }
    }
    if (current.isEnd) {
      return 1;
    }
    return 0;
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
}

class Node {
  constructor(value = '') {
    this.value = value;
    this.parent = null;
    this.children = {};
    this.isEnd = false;
  }
}

/*
const board = [
  ['o', 'a', 'a', 'n'],
  ['e', 't', 'a', 'e'],
  ['i', 'h', 'k', 'r'],
  ['i', 'f', 'l', 'v'],
];
const words = ['oath', 'pea', 'eat', 'rain'];
console.log(findWords(board, words)); // [oath, eat]
*/
