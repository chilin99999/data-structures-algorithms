import assert from 'assert';
import BinarySearchTree from '../data-structures/binary-search-tree.js';

describe('BinarySearchTree', () => {
  it('Insert contains', () => {
    const binarySearchTree = new BinarySearchTree();

    //    10
    // 9      13
    //     11    18
    //          16
    assert.deepStrictEqual(binarySearchTree.root, null);
    binarySearchTree.insert(10);
    binarySearchTree.insert(13);
    binarySearchTree.insert(18);
    binarySearchTree.insert(16);
    binarySearchTree.insert(9);
    binarySearchTree.insert(11);

    assert.deepStrictEqual(binarySearchTree.contains(10), true);
    assert.deepStrictEqual(binarySearchTree.contains(11), true);
    assert.deepStrictEqual(binarySearchTree.contains(12), false);
    assert.deepStrictEqual(binarySearchTree.contains(13), true);
    assert.deepStrictEqual(binarySearchTree.contains(14), false);
    assert.deepStrictEqual(binarySearchTree.contains(15), false);
  });
});
