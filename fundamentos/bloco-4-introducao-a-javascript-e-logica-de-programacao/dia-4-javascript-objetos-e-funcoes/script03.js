const n1 = 5;
const n2 = 20;
const n3 = 21;
let getHightNumber = 0;


function compare3Number(n1, n2, n3){
   if(n1 > n2 && n1 > n3)console.log(n1 + ' é maior que '+n2+' ê '+n3);
   if(n2 > n1 && n2 > n3)console.log(n2 + ' é maior que'+n1 + 'ê '+n3);
   else console.log(n3 + ' é maior que '+n1 + ' ê '+n2);
}

compare3Number(n1, n2, n3);
