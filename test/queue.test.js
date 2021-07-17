import assert from 'assert';
import Queue from '../data-structures/queue.js';

describe('Queue', () => {
  it('Enqueue dequeue', () => {
    const queue = new Queue();
    assert.deepStrictEqual(queue.size, 0);
    assert.deepStrictEqual(queue.first, null);
    assert.deepStrictEqual(queue.last, null);

    queue.enqueue(1);
    assert.deepStrictEqual(queue.size, 1);
    assert.deepStrictEqual(queue.first.value, 1);
    assert.deepStrictEqual(queue.last.value, 1);
    queue.enqueue(2);
    assert.deepStrictEqual(queue.size, 2);
    assert.deepStrictEqual(queue.first.value, 1);
    assert.deepStrictEqual(queue.last.value, 2);

    assert.deepStrictEqual(queue.dequeue(), 1);
    assert.deepStrictEqual(queue.size, 1);
    assert.deepStrictEqual(queue.dequeue(), 2);
    assert.deepStrictEqual(queue.size, 0);
    assert.deepStrictEqual(queue.dequeue(), null);
    assert.deepStrictEqual(queue.size, 0);
  });
});
