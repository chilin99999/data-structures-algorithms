import assert from 'assert';
import MaxBinaryHeap from '../data-structures/max-binary-heap.js';

describe('MaxBinaryHeap', () => {
  it('Insert', () => {
    const maxBinaryHeap = new MaxBinaryHeap();
    maxBinaryHeap.values = [41, 39, 33, 18, 27, 12];

    maxBinaryHeap.insert(55);
    assert.deepStrictEqual(maxBinaryHeap.values, [55, 39, 41, 18, 27, 12, 33]);

    maxBinaryHeap.insert(20);
    assert.deepStrictEqual(
      maxBinaryHeap.values,
      [55, 39, 41, 20, 27, 12, 33, 18]
    );

    maxBinaryHeap.insert(3);
    assert.deepStrictEqual(
      maxBinaryHeap.values,
      [55, 39, 41, 20, 27, 12, 33, 18, 3]
    );

    maxBinaryHeap.insert(200);
    assert.deepStrictEqual(
      maxBinaryHeap.values,
      [200, 55, 41, 20, 39, 12, 33, 18, 3, 27]
    );

    maxBinaryHeap.values = [41, 39, 33, 18, 27, 12];
    maxBinaryHeap.insert(0);
    assert.deepStrictEqual(maxBinaryHeap.values, [41, 39, 33, 18, 27, 12, 0]);
  });

  it('Extract', () => {
    const maxBinaryHeap = new MaxBinaryHeap();
    maxBinaryHeap.values = [41, 39, 33, 18, 27, 12];

    assert.deepStrictEqual(maxBinaryHeap.extract(), 41);
    assert.deepStrictEqual(maxBinaryHeap.values, [39, 27, 33, 18, 12]);

    assert.deepStrictEqual(maxBinaryHeap.extract(), 39);
    assert.deepStrictEqual(maxBinaryHeap.values, [33, 27, 12, 18]);

    assert.deepStrictEqual(maxBinaryHeap.extract(), 33);
    assert.deepStrictEqual(maxBinaryHeap.values, [27, 18, 12]);

    assert.deepStrictEqual(maxBinaryHeap.extract(), 27);
    assert.deepStrictEqual(maxBinaryHeap.values, [18, 12]);

    assert.deepStrictEqual(maxBinaryHeap.extract(), 18);
    assert.deepStrictEqual(maxBinaryHeap.values, [12]);

    assert.deepStrictEqual(maxBinaryHeap.extract(), 12);
    assert.deepStrictEqual(maxBinaryHeap.values, []);

    assert.deepStrictEqual(maxBinaryHeap.extract(), null);
    assert.deepStrictEqual(maxBinaryHeap.values, []);

    maxBinaryHeap.values = [27, 12, 18];
    assert.deepStrictEqual(maxBinaryHeap.extract(), 27);
    assert.deepStrictEqual(maxBinaryHeap.values, [18, 12]);
  });
});
