// 以暴力破解法，實作LeetCode 28的版本
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle === '') {
    return 0;
  }

  for (let i = 0; i < haystack.length; i++) {
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        break;
      }
      if (j === needle.length - 1) {
        return i;
      }
    }
  }
  return -1;
};

// let result;

// result = strStr('mississippi', 'issip');
// console.log(result); // 4

// result = strStr('mississippi', 'issipi');
// console.log(result); // -1

// result = strStr('mississippi', 'pi');
// console.log(result); // 9

// result = strStr('aaaaaaaab', 'aaaab');
// console.log(result); // 4

// result = strStr('abaacababcac', 'ababc');
// console.log(result); // 5

// result = strStr('aaronaaronaac', 'aaronaac');
// console.log(result); // 5

// result = strStr('aaronaaronaabbbb', 'aaronaac');
// console.log(result); // -1

// result = strStr('aaa', 'aaaa');
// console.log(result); // -1
