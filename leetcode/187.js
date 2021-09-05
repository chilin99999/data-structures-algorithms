/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  const appearence = {};
  const output = [];
  for(let start=0; start<=s.length-10; start++) {
    const scan = s.substring(start, start+10);
    if(appearence[scan] == 1) {
      output.push(scan);
    }
    appearence[scan] = (appearence[scan] || 0) + 1;
  }
  return output;
};

// let result;

// result = findRepeatedDnaSequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT');
// console.log(result); // ['AAAAACCCCC', 'CCCCCAAAAA']

// result = findRepeatedDnaSequences('AAAAAAAAAAAAA');
// console.log(result); // ['AAAAAAAAAA']

// result = findRepeatedDnaSequences('AAAAAAAAAAA');
// console.log(result); // ['AAAAAAAAAA']