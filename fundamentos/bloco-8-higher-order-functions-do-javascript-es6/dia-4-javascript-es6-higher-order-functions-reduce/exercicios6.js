const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

// function studentAverage() {
//   const getAverage = students.map((student, index) =>{ 
//     return {name: student, average: grades[index].reduce((acc, curr) => acc + curr, 0)  / grades[index].length};
//   });
//   return getAverage;
// }
// console.log(studentAverage());

// const expected = [
//   { name: 'Pedro Henrique', average: 7.8 },
//   { name: 'Miguel', average: 9.2 },
//   { name: 'Maria Clara', average: 8.8 },
// ];
// const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
// const notes = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

// function studentAverage() {
//   const nameAndAverage = students.map((student, index) => ({
//     name: student,
//     average: (notes[index].reduce((acc, curr) => acc + curr, 0) / notes[index].length),
//   }));
//   return nameAndAverage;
// }

// const expected = [
//   { name: 'Pedro Henrique', average: 7.8 },
//   { name: 'Miguel', average: 9.2 },
//   { name: 'Maria Clara', average: 8.8 },
// ];
const sumGrades = (acc, currentValue) => {
  return acc + currentValue;
}
const calcAverage = (index) =>{
  const sum = grades[index].reduce(sumGrades, 0);
  return sum / grades[index].length;
}
function studentAverage(){
  return students.reduce((acc, student, index) =>{
    const obj = {
      name: student,
      averege: calcAverage(index),
    };
    acc.push(obj);
    return acc;
  },[]);
}

console.log(studentAverage());