//! Arreglos
const numeros = [10,20,30,40,50];
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');

console.table(numeros);
console.table(meses);

//! Acceder a los valores de un arreglo
console.log(numeros[3]);

//! Iterador
meses.forEach( function(mes) {
    console.log(mes);
})