Exercício 1 
let base = 10;
let altura = 5;

function calcularAreaEPerimetro(base, altura){
    return {
        perimetro: (2 * base) + (2 * altura),
        area: base * altura
    }
}

let areaPerimetro = calcularAreaDoPerimetro(base, altura);
console.log('Perimetro: '+ areaPerimetro.perimetro);
console.log('Area: '+ areaPerimetro.area);
console.log(areaPerimetro);