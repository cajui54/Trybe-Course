/* 5 - Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.*/
const angleA = 20;
const angleB = 90;
const angleC = 130;

function calculateAngleOfTriangle(angleA, angleB, angleC){
    if(angleA < 0 || angleB < 0 || angleC < 0 ){
        return 'error';
    }
    else{
        sumAngle = angleA + angleB + angleC;

    
        if(sumAngle === 180) return true;
        else if(sumAngle != 180) return false;
    }
        
       
    
}

let getStatusOfTriangle = calculateAngleOfTriangle(angleA, angleB, angleC);
console.log(' - Triângulo: '+getStatusOfTriangle);