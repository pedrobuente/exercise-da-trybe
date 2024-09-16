// exercicio 1
const employeeGenerator = (fullName) => {
    const email = fullName.toLowerCase().split(' ').join('_');
    return { fullName, email: `${email}@trybe.com` };
  };
  
  const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'),
      id2: callback('Luiza Drumond'),
      id3: callback('Carla Paiva'),
    };
    return employees;
  };
  
  console.log(newEmployees(employeeGenerator));

  //exercicio 2

  const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};

console.log(lotteryResult(2, numberChecker));
//exercicio 3
const check = (array1,array2) => {
    let cont = 0;
    if(array1 !== array2 && array1 !== 'N.A'){
        cont -= 0.5;
    }if(array1 === array2){
        cont += 1;
    }
    return cont;
}

 const gabarito = (respostasCertas , respostas, callback ) => {
     let pontuacao = 0;
     for(let index = 0; index < respostas.length ; index +=1){
        let gabarit0 = respostasCertas[index];
        let answer = respostas[index];
        pontuacao += callback(answer,gabarit0);
     }
   return  pontuacao;
 }
 const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
 const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

 console.log(gabarito(RIGHT_ANSWERS,STUDENT_ANSWERS, check));
 