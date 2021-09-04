// Backtracking 回溯法
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  return getPossibilities(digits);
};

const mapping = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};

function getPossibilities(digits, outputs = [], index = 0) {
  const digit = digits[index];
  const characters = mapping[digit] || [];
  let newOutputs = [];

  if(outputs.length == 0) {
    newOutputs = characters;
  }
  else {
    outputs.forEach(output => {
      characters.forEach(character => {
        newOutputs.push(output + character);
      });
    });
  }
  if(index >= digits.length - 1) {
    return newOutputs;
  }
  return getPossibilities(digits, newOutputs, index+1);
}

// let result;

// result = letterCombinations('23');
// console.log(result); // ['ad','ae','af','bd','be','bf','cd','ce','cf']

// result = letterCombinations('');
// console.log(result); // []

// result = letterCombinations('2');
// console.log(result); // ['a', 'b', 'c']