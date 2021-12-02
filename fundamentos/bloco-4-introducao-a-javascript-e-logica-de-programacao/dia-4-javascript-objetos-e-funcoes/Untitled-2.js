
let arrayNumbers = [10, 3, 5, 2, 4, 1];

function checkEvenOrOdd(numbers){
    let countEven = 0;
    let countOdd = 0;

    for(let index = 0; index < numbers.length; index+=1){
        if(numbers[index] % 2 === 0){
            countEven += 1;
        }
        else{
            countOdd +=1;
        }
    }
    return {
        pares: countEven,
        impares: countOdd
    }
}
let getCountEvenOrOdd = checkEvenOrOdd(arrayNumbers);
console.log(getCountEvenOrOdd);