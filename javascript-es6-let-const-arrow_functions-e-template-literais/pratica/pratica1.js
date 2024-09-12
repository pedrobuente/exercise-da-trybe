function testingScope(escopo) {
    if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(ifScope);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
   
  }

  testingScope(true);

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a,b) => a - b);

  console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente`); // será necessário alterar essa linha 😉

  function fatorial (num){
      let factorial = 1;
      if (num > 0){
          for(let index = num ; index > 1 ; index -=1){
         factorial *=  index;
          }
      }
      return factorial;
  }
  console.log(fatorial(5));

  const longestWord = text => {
    let wordArray = text.split(' ');
    let maxLength = 0;
    let result = '';
    console.log(wordArray);

    for (const word of wordArray) {
        if (word.length > maxLength) {
            maxLength = word.length;
            result = word;
        }
    }

    return result;
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));