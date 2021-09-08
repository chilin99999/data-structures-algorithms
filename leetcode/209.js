// Sliding window - 76ms
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let start = 0;
  let end = 0;
  let sum = 0;
  let minLength = 0;

  while (end < nums.length) {
    sum += nums[end];
    while (sum >= target) {
      const length = end - start + 1;
      if (minLength == 0 || length < minLength) {
        minLength = length;
      }
      sum -= nums[start];
      start += 1;
    }
    end += 1;
  }
  return minLength;
};

// let result;

// result = minSubArrayLen(7, [2, 3, 1, 2, 4, 3]);
// console.log(result); // 2

// result = minSubArrayLen(4, [1, 4, 4]);
// console.log(result); // 1

// result = minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]);
// console.log(result); // 0
