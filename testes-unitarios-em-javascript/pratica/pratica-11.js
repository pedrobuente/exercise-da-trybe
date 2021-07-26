const assert = require('assert');
const removeVowels = (word) => {
    const characters = word.split('');
    let results = '';
    let cont = 0;
  
    for (let index = 0; index < characters.length; index += 1) {
      if (
        characters[index] === 'a' ||
        characters[index] === 'o' ||
        characters[index] === 'i' ||
        characters[index] === 'e' ||
        characters[index] === 'u'
      ) {
          cont += 1;
        results += (cont);
      } else {
        results += (characters[index]);
      }
    }
    return results;
  };
  
  
  const parameter = 'Dayane';
  const result = 'D1y2n3';
  assert.deepStrictEqual(removeVowels(parameter),result,"erro");