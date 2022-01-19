
const {
  sum,
  myRemove,
  myFizzBuzz,
  searchEmployee,
 }= require('./sum');

// 1 - requisito
describe('Testando a função sum', () =>{
  test('Teste se o retorno de sum(4, 5) é 9', ()=>{
    expect(sum(4,5)).toBe(9);
  });
  test('Teste se o retorno de sum(0, 0) é 0', () =>{
    expect(sum(0,0)).toBe(0);
  });
  test('Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', () =>{
    expect(() => sum(4,"5")).toThrow();
  });
  test('Testing if parameters must be numbers', () =>{
    expect(() => sum(4,"5")).toThrowError(new Error(`parameters must be numbers`))
  });
});

// 2 -requisito
describe('Testando array', ()=>{
  test('1. Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  test('2. Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () =>{
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  test('3. Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
})
// 3 - requisito
describe('Testando a função myFizzBuzz', () =>{
  test('Testando false caso o valor enviado seja string', () => {
    expect(myFizzBuzz("5")).not.toBeTruthy();
  })
  test('Testar se o resto divisão por 3 e 5 seja igual a 0 retorne fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  test('Testar se o resto da divisão por 3 seja 0 e retorne fizz', () => {
   expect(myFizzBuzz(9)).toBe('fizz');
  });
  test('Testar se o resto da divisão por 5 seja 0 e retorne buzz', () => {
    expect(myFizzBuzz(25)).toBe('buzz');
  })
});

describe('Testando object', () =>{
  test('testando se há uma função searchEmployee', () =>{
    expect(searchEmployee).toBeDefined();
  });
  test('testando se foi encontrado Ana ', () =>{
    expect(searchEmployee('5569-4', 'firstName')).toBe('George');
  });
  test('testando se passando o id 4678-2 o retorno seja Dodds', () => {
    expect(searchEmployee('4678-2', 'lastName')).toBe('Dodds');
  });
  test(`testando se passar o id o retorno seja ['Hooks', 'Context API', 'Tailwind CSS']`, () => {
    expect(searchEmployee('1256-4', 'specialities')).toEqual(['Hooks', 'Context API', 'Tailwind CSS']);
  });
  test('testando caso não exista o id passado', () =>{
    expect(() => searchEmployee('8579-', 'firstName')).toThrow();
  });
})


