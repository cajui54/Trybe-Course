let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let countEven = 0;

for(let index = 0; index < numbers.length; index += 1){

    if(numbers[index] % 2 != 0){
        countEven+=1;
    }
    else{
        console.log('nunhum valor impar encontrado');
    }
}
console.log(countEven);