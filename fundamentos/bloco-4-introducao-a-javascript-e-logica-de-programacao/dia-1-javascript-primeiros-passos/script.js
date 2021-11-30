/*1*/
// const a = 5;
// const b = 10;

// console.log(a+b);
// console.log(a-b);
// console.log(a**b);
// console.log(a/b);
// console.log(a%b);

// /*2*/
// const value1 = 50;
// const value2 = 20;

// if(value1 > value2){
//     console.log(value1+' é o maior número');
// }
// else{
//     console.log(value2+' é o maior número');
// }

/*3*/
// const number1 = 4;
// const number2 = 5;
// const number3 = 7;

// if(number1 > number2 && number1 > number3){
//     console.log(number1+' é o maior número');
// }
// else if(number2 > number1 && number2 > number3){
//     console.log(number2+' é o maior número');
// }
// else{
//     console.log(number3+' é o maior número');
// }

/*4*/

// const dado = 2;

// if(dado > 0){
//     console.log('Positivo');
// }
// else if(dado < 0){
//     console.log('Negative');
// }
// else{
//     console.log('zero');
// }

/*5*/
// const anguloA = 110;
// const anguloB = 10;
// const anguloC = 40;

// let calculoDosAngulosTriangulo = anguloA + anguloB + anguloC;

// if(calculoDosAngulosTriangulo === 180){
//     console.log(true);
// }
// else{
//     console.log(false + ' ocorreu um erro');
// }

/*6*/

// let pecaXadres = "peao";

// switch(pecaXadres.toLowerCase()){
//     case  'rei':
//         console.log(pecaXadres+'movimento Horizontal, Vertical e Diagonal');
//         break;

//     case  'rainha':
//         console.log(pecaXadres+'movimento Horizontal, Vertical e Diagonal');
//         break;

//     case  'bispo':
//         console.log(pecaXadres+' movimento Diagonal');
//         break;
    
//     case  'cavalo':
//        console.log(pecaXadres+' movimento em formar de L, , quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.');
//        break;
    
//     case  'torre':
//        console.log(pecaXadres+' movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.');
//        break;
//     case 'peao' :
//         console.log(pecaXadres+'  movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal.');
//         break;
//     default :
//     console.log('Ocorreu um erro, '+pecaXadres+' invalida');
// }

/*7*/

// let nota = 80;
// let porcentagemNota = (nota*100)/100;

// if(nota < 0 || nota > 100){
//     console.log('Ocorreu um erro, só é aceito os valores entre 0 e 100.');
//     console.log('Você digitou :' +nota);
// }
// else{

//     if(porcentagemNota >=90)console.log('A');
//     else if(porcentagemNota >= 80)console.log('B');
//     else if(porcentagemNota >= 70)console.log('C');
//     else if(porcentagemNota >= 60)console.log('D');
//     else if(porcentagemNota >= 50)console.log('E');
//     else if(porcentagemNota < 50)console.log('F');
// }
/*8*/

        // const n1 = 5;
        // const n2 = 2;
        // const n3 = 4;

        // if(n1 % 2 === 0 || n2 % 2 === 0 || n3 % 2 === 0){
        //     console.log('True');
        // }
        // else{
        //     console.log('False');
        // }

//9
/*
        const n1 = 5;
        const n2 = 2;
        const n3 = 4;
        if(n1 % 2 !== 0 || n2 % 2 !== 0 || n3 % 2 !== 0){
            console.log('True');
        }
        else{
            console.log('False');
        }*/

// 10

// const custoProduto = 30;
// const valorVenda = 70;

// if(custoProduto >= 0 && valorVenda >=0){
//     let lucro = valorVenda - custoProduto;
//     let total = lucro * 1000;
//     let imposto = (total*20)/100;
//     let lucroLiquido = total - imposto;

//     console.log('Lucro Unitário R$: '+lucro.toFixed(2));
//     console.log('Lucro total Bruto R$: '+total.toFixed(2));
//     console.log('Imposto de 20% R$: '+imposto.toFixed(2));
//     console.log('Lucro Liquido R$: '+lucroLiquido.toFixed(2));
// }
// else{
//     console.log('Ocorreu um erro');
// }

//11
let salarioBruto = 3000;
let descontoINSS = 0;
let impostoDeRenda = 0;

console.log('Salário Bruto R$: '+salarioBruto.toFixed(2));

if(salarioBruto <= 1556.94){
    descontoINSS = (salarioBruto*8)/100;
    
}
else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    descontoINSS = (salarioBruto*9)/100;
}
else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    descontoINSS = (salarioBruto*11)/100;
}
else if(salarioBruto > 5189.82){
    descontoINSS =  570.88;
}

//deduzido o INSS
salarioBruto -= descontoINSS;

if(salarioBruto <= 1903.98){
    impostoDeRenda = 0;
}
else if(salarioBruto >= 1903.99 && salarioBruto <= 2826.65){
    impostoDeRenda = (salarioBruto * 7.5 / 100) - 142.80;
   
}
else if(salarioBruto >= 2826.66 && salarioBruto <= 3751.05){
    impostoDeRenda = (salarioBruto * 15 / 100) - 354.80;
}
else if(salarioBruto >= 3751.06 && salarioBruto <= 4664.68){
    impostoDeRenda = (salarioBruto * 22.5 / 100) - 636.13;
}
else if(salarioBruto > 4664.68){
    impostoDeRenda = (salarioBruto * 27.5 / 100) - 869.36;
}

let salarioLiquido = salarioBruto - impostoDeRenda;

console.log('Desconto INSS R$: '+descontoINSS.toFixed(2));
console.log('Imposto de Renda R$: ' + impostoDeRenda.toFixed(2));
console.log('Salário líquido R$: '+salarioLiquido.toFixed(2));






