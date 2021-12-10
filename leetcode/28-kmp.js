// 以KMP演算法，實作LeetCode 28的版本
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle === '') {
    return 0;
  }

  const prefixTable = buildPrefixTable(needle);
  let i = 0;
  let j = 0;
  while (1) {
    if (haystack[i] === needle[j]) {
      if (j === needle.length - 1) {
        return i - j;
      }
      i += 1;
      j += 1;
    } else {
      j = prefixTable[j - 1];
      if (j == null) {
        if (i >= haystack.length - needle.length) {
          return -1;
        }
        j = 0;
        i += 1;
      }
    }
  }
};

function buildPrefixTable(str) {
  const table = [];
  for (let i = 0; i < str.length - 1; i++) {
    const partStr = str.slice(0, i + 1);
    let prefix = partStr;
    let suffix = partStr;
    while (1) {
      prefix = prefix.slice(1);
      suffix = suffix.slice(0, -1);
      if (prefix === suffix) {
        table[i] = prefix.length;
        break;
      }
    }
  }
  return table;
}

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
