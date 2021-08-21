/**
 * It's a tree-based data structure, which is a complete tree
 * Each parent has at most two child nodes
 * No guarantee between sibling nodes
 * As compact as possible
 * Max binary heap: Parent node is always greater than child nodes
 * Min binary heap: Parent node is always less than child nodes
 *
 * Can store in an array
 * For any parent index n, left child is 2n + 1, right child is 2n + 2
 * For any child index n, parent is Math.floor((n-1)/2)
 *
 * 使用場景：
 * 1. Priority Queue -> k-th largest problem
 * 2. Heap Sort
 *
 * Big O
 * Insertion: O(log N)
 * Removal: O(log N)
 */

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  // Append to array, and bubble up
  insert(value) {
    this.values.push(value);
    let index = this.values.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.values[index] <= this.values[parentIndex]) {
        break;
      }
      const temp = this.values[parentIndex];
      this.values[parentIndex] = this.values[index];
      this.values[index] = temp;

      index = parentIndex;
    }
  }

  // Remove first, move last to first, and sink down
  extract() {
    const max = this.values[0] ?? null;
    const last = this.values.pop();
    if (this.values.length === 0) {
      return max;
    }
    this.values[0] = last;

    let index = 0;
    // left child exist
    while (this.values[index * 2 + 1] != null) {
      // compare left and right, and make sure right is not out of bound
      const largerChildIndex =
        this.values[index * 2 + 2] == null ||
        this.values[index * 2 + 1] > this.values[index * 2 + 2]
          ? index * 2 + 1
          : index * 2 + 2;
      if (this.values[index] > this.values[largerChildIndex]) {
        break;
      }
      const temp = this.values[largerChildIndex];
      this.values[largerChildIndex] = this.values[index];
      this.values[index] = temp;

      index = largerChildIndex;
    }

    return max;
  }
}

export default MaxBinaryHeap;
