import assert from 'assert';
import Trie from '../data-structures/trie.js';

describe('Trie', () => {
  it('find', () => {
    const trie = new Trie();

    trie.insert('carry');
    trie.insert('catch');
    trie.insert('cat');
    trie.insert('cry');

    assert.deepStrictEqual(
      trie.find('ca').sort(),
      ['carry', 'catch', 'cat'].sort()
    );
  });

  it('has', () => {
    const trie = new Trie();

    trie.insert('carry');
    trie.insert('catch');
    trie.insert('cat');
    trie.insert('cry');

    assert.deepStrictEqual(trie.has('catc'), false);
    assert.deepStrictEqual(trie.has('cat'), true);
    assert.deepStrictEqual(trie.has('ca'), false);
  });

  it('remove', () => {
    const trie = new Trie();

    trie.insert('cat');
    trie.insert('category');
    trie.insert('catch');
    trie.insert('catchplay');
    assert.deepStrictEqual(trie.has('cat'), true);
    assert.deepStrictEqual(trie.has('category'), true);
    assert.deepStrictEqual(trie.has('catch'), true);
    assert.deepStrictEqual(trie.has('catchplay'), true);

    trie.remove('catch');
    assert.deepStrictEqual(trie.has('cat'), true);
    assert.deepStrictEqual(trie.has('category'), true);
    assert.deepStrictEqual(trie.has('catch'), false);
    assert.deepStrictEqual(trie.has('catchplay'), true);

    trie.remove('catchplay');
    assert.deepStrictEqual(trie.has('cat'), true);
    assert.deepStrictEqual(trie.has('category'), true);
    assert.deepStrictEqual(trie.has('catch'), false);
    assert.deepStrictEqual(trie.has('catchplay'), false);

    trie.remove('category');
    assert.deepStrictEqual(trie.has('cat'), true);
    assert.deepStrictEqual(trie.has('category'), false);
    assert.deepStrictEqual(trie.has('catch'), false);
    assert.deepStrictEqual(trie.has('catchplay'), false);
  });
});
