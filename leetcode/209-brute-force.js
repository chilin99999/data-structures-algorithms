// Brute force - 700ms
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let minLength = 0;

  for (let start = 0; start < nums.length; start++) {
    let sum = 0;
    for (let end = start; end < nums.length; end++) {
      const length = end - start + 1;
      sum += nums[end];
      if (sum >= target && (minLength == 0 || length < minLength)) {
        minLength = length;
        break;
      }
    }
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
