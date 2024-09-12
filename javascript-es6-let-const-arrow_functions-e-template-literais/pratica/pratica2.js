const getBotao = document.getElementsByTagName('button');
const getP = document.getElementsByTagName('p');
let clickCount = 0;
getBotao[0].addEventListener('click', () =>{
     clickCount += 1;
     getP[0].innerText = clickCount;
});