
// 1-) testingScope = (escopo) => {
//   if (escopo === true) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     `${ifScope = ifScope} + ' ótimo, fui utilizada no escopo `;
//     console.log(ifScope);
//   } else {
//     let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }

// }

// testingScope(true);

// 2 -
// const oddsAndEvens = () => [13, 3, 4, 10, 7, 2].sort((a,b) => a-b);

// console.log(`${oddsAndEvens()}`); 


function fatorail(n){
  let  total = 1;

  for(let i = 1; i <= n; i++){
    total *= i;
  }
  return total;
}
console.log(fatorail(6));

const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(5));


const longestWord = text => {
    let wordArray = text.split(' ');
    let maxLength = 0;
    let result = '';

    for (const word of wordArray) {
        if (word.length > maxLength) {
            maxLength = word.length;
            result = word;
        }
    }

    return result;
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));
