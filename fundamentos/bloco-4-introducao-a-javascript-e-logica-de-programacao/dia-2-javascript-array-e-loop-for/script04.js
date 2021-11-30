let numbers = [5, 9, 3, 19, 70, 8,  2, 35, 27, 200];
let getNumber = numbers[0];


for(let index = 1; index < numbers.length; index+=1){
    if(numbers[index] < getNumber){
        getNumber = numbers[index];
    }
    
}
console.log(getNumber);