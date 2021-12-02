/* 4 - Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.*/

const value = 20;

function checkNumber(number){
    if(number > 0) return 'Positive';
    else if(number <= 0) return 'Negative';
}

console.log(checkNumber(value));;
