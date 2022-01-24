const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, curr) =>
     acc + curr.split('').reduce((acumulator, current) => {
        if (current === 'a' || current === 'A') return acumulator + 1;
        return acumulator;
     }, 0), 0);
}
console.log(containsA());

// function containsA() {
//   let count = 0;
//   const charName = names.join().split('');
//   charName.forEach(char =>{
//     if(char === 'a' || char === 'A'){
//       count+=1;
//     }
//   })
//   return count;
// }
// console.log(containsA());
