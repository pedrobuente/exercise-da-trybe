const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3),[1, 2, 4], 'array não esperado');
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3),[1, 2, 3, 4], 'array não esperado');

const myList = [1,2,3,4];
myRemoveWithoutCopy(myList);
assert.deepStrictEqual(myList,[1,2,3,4]);

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5),[1, 2, 3, 4], 'array não esperado');