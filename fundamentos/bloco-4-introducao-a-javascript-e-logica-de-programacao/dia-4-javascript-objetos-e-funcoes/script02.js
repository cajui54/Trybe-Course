/* 2 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.*/

const number1 = Math.floor(Math.random()*10)+1;
const number2 = Math.floor(Math.random()*10)+1;

function compareNumber(number1, number2){
    if(number1 > number2) return number1 + ' é maior que o número '+number2;
    else if(number2 > number1) return number2 + ' é maior que o númber '+number1;
    else return number1 + ' e ' + number2 + 'são iguais';
}

console.log(compareNumber(number1, number2));