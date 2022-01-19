// const newEmployees = (employee) => {
//   const employees = {
//     id1: employee('Pedro Guerra'),
//     id2: employee('Luiza Drumond'),
//     id3: employee('Carla Paiva'),
//   }
//   return employees;
// };

// const addEmployee = (fullName) => {
//   const emailPerson = fullName.toLowerCase().split(' ').join('_');
//   const tranformEmail = `${emailPerson}@trybe.com`;
//   return {name: fullName, email: tranformEmail};
// }
// console.log(newEmployees(addEmployee));



// const checkWinner = (callback, number) =>{
//   const random = callback();
//   console.log(random, number);
//   if (random === number) {
//     return "Parabéns você ganhou";
//   } else {
//     return  "Tente novamente";
//   }
// }
// const randomNumber =  () => Math.floor(Math.random() * 5) + 1;


// console.log(checkWinner(randomNumber, 5));
// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const compareNota = (rightAnswer, studentAnswer) =>{
//   if(rightAnswer === studentAnswer){
//     return 1;
//   } if(studentAnswer === 'N.A'){
//     return 0;
//   }
//   return 0.5;
// }

// const getGabarito = (rightAnswers, studentAnswers, compareNota) => {
//   let scoreCount = 0;
//   for(let index = 0; index < rightAnswers.length; index+=1){
//     const score = compareNota(rightAnswers[index], studentAnswers[index]);
//     scoreCount += score;
//   }
//   return scoreCount;
// }
// console.log(gerito(tGabaRIGHT_ANSWERS, STUDENT_ANSWERS, compareNota));

// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
// const compareAnswers = (rightAnswer, studentAnswer) => {
//   if (rightAnswer === studentAnswer) {
//     return 1;
//   } if (studentAnswer === 'N.A') {
//     return 0;
//   }
//   return -0.5;
// };

// const countPoints = (rightAnswers, studentAnswers, action) => {
//   let contador = 0;
//   for (let index = 0; index < rightAnswers.length; index += 1) {
//     const actionReturn = action(rightAnswers[index], studentAnswers[index]);
//     contador += actionReturn;
//   }
//   return `Resultado final: ${contador} pontos`;
// };

// console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));
const verificarNota =  (media) => media >=5 ? "APROVADO(a)"  : "REPROVADO(a)";


function caculatorNota(nota1, nota2, verificar){
  const media = (nota1 + nota2) / 2;
  const situacao = verificar(media);

  return situacao;
}

console.log(caculatorNota(5,7,verificarNota));

