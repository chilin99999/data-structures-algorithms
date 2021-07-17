import assert from 'assert';
import Stack from '../data-structures/stack.js';

describe('Stack', () => {
  it('Push pop', () => {
    const stack = new Stack();
    assert.deepStrictEqual(stack.size, 0);
    assert.deepStrictEqual(stack.top, null);

    stack.push(1);
    assert.deepStrictEqual(stack.size, 1);
    assert.deepStrictEqual(stack.top.value, 1);
    stack.push(2);
    assert.deepStrictEqual(stack.size, 2);
    assert.deepStrictEqual(stack.top.value, 2);

    assert.deepStrictEqual(stack.pop(), 2);
    assert.deepStrictEqual(stack.size, 1);
    assert.deepStrictEqual(stack.pop(), 1);
    assert.deepStrictEqual(stack.size, 0);
    assert.deepStrictEqual(stack.pop(), null);
    assert.deepStrictEqual(stack.size, 0);
  });
});
