import assert from 'assert';
import LinkedList from '../data-structures/linked-list.js';

describe('LinkedList', () => {
  it('Push pop', () => {
    const linkedList = new LinkedList();

    assert.deepStrictEqual(linkedList.length, 0);
    linkedList.push(1);
    assert.deepStrictEqual(linkedList.length, 1);
    linkedList.push(2);
    assert.deepStrictEqual(linkedList.length, 2);
    assert.deepStrictEqual(linkedList.head.value, 1);
    assert.deepStrictEqual(linkedList.tail.value, 2);

    const popNode1 = linkedList.pop();
    assert.deepStrictEqual(popNode1.value, 2);
    assert.deepStrictEqual(linkedList.length, 1);
    const popNode2 = linkedList.pop();
    assert.deepStrictEqual(popNode2.value, 1);
    assert.deepStrictEqual(linkedList.length, 0);
    const popNode3 = linkedList.pop();
    assert.deepStrictEqual(popNode3, null);
    assert.deepStrictEqual(linkedList.length, 0);
    assert.deepStrictEqual(linkedList.head, null);
    assert.deepStrictEqual(linkedList.tail, null);
  });

  it('Shift unshift', () => {
    const linkedList = new LinkedList();

    linkedList.push(1);
    linkedList.push(2);
    linkedList.shift();
    assert.deepStrictEqual(linkedList.length, 1);
    assert.deepStrictEqual(linkedList.head.value, 2);
    assert.deepStrictEqual(linkedList.tail.value, 2);
    linkedList.unshift(0);
    assert.deepStrictEqual(linkedList.length, 2);
    assert.deepStrictEqual(linkedList.head.value, 0);
    assert.deepStrictEqual(linkedList.tail.value, 2);
    linkedList.shift();
    assert.deepStrictEqual(linkedList.length, 1);
    assert.deepStrictEqual(linkedList.head.value, 2);
    assert.deepStrictEqual(linkedList.tail.value, 2);
    linkedList.shift();
    assert.deepStrictEqual(linkedList.length, 0);
    assert.deepStrictEqual(linkedList.head, null);
    assert.deepStrictEqual(linkedList.tail, null);
    linkedList.shift();
    assert.deepStrictEqual(linkedList.length, 0);
    assert.deepStrictEqual(linkedList.head, null);
    assert.deepStrictEqual(linkedList.tail, null);
  });

  it('Get set', () => {
    const linkedList = new LinkedList();

    const getNode1 = linkedList.get(0);
    assert.deepStrictEqual(getNode1, null);
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    const getNode2 = linkedList.get(0);
    const getNode3 = linkedList.get(1);
    const getNode4 = linkedList.get(2);
    const getNode5 = linkedList.get(3);
    const getNode6 = linkedList.get(-1);
    assert.deepStrictEqual(getNode2.value, 1);
    assert.deepStrictEqual(getNode3.value, 2);
    assert.deepStrictEqual(getNode4.value, 3);
    assert.deepStrictEqual(getNode5, null);
    assert.deepStrictEqual(getNode6, null);

    const setNode1 = linkedList.set(-1, 99);
    const setNode2 = linkedList.set(0, 100);
    const setNode3 = linkedList.set(2, 102);
    const setNode4 = linkedList.set(5, 105);
    assert.deepStrictEqual(setNode1, null);
    assert.deepStrictEqual(setNode2.value, 100);
    assert.deepStrictEqual(setNode3.value, 102);
    assert.deepStrictEqual(setNode4, null);
    assert.deepStrictEqual(getNode2.value, 100);
    assert.deepStrictEqual(getNode3.value, 2);
    assert.deepStrictEqual(getNode4.value, 102);
  });

  it('Insert remove', () => {
    const linkedList = new LinkedList();

    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3); // 1 -> 2 -> 3
    const inertNode1 = linkedList.insert(2, 2.5);
    const inertNode2 = linkedList.insert(4, 4); // 1 -> 2 -> 2.5 -> 3 -> 4

    const getNode1 = linkedList.get(0);
    const getNode2 = linkedList.get(1);
    const getNode3 = linkedList.get(2);
    const getNode4 = linkedList.get(3);
    const getNode5 = linkedList.get(4);
    assert.deepStrictEqual(getNode1.value, 1);
    assert.deepStrictEqual(getNode2.value, 2);
    assert.deepStrictEqual(getNode3.value, 2.5);
    assert.deepStrictEqual(getNode4.value, 3);
    assert.deepStrictEqual(getNode5.value, 4);
    assert.deepStrictEqual(inertNode1.value, 2.5);
    assert.deepStrictEqual(inertNode2.value, 4);

    const inertNode3 = linkedList.insert(-1, 100);
    const inertNode4 = linkedList.insert(6, 100);
    const inertNode5 = linkedList.insert(100, 100);
    assert.deepStrictEqual(linkedList.length, 5);
    assert.deepStrictEqual(inertNode3, null);
    assert.deepStrictEqual(inertNode4, null);
    assert.deepStrictEqual(inertNode5, null);

    const removeNode1 = linkedList.remove(2); // 1 -> 2 -> 3 -> 4
    assert.deepStrictEqual(linkedList.length, 4);
    assert.deepStrictEqual(removeNode1.value, 2.5);
  });
});
