//! Arreglos
const numeros = [10,20,30,40,50];
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');

//! Acceder a los valores de un arreglo
console.log(numeros[3]);

//! Iterador
meses.forEach( function(mes) {
    console.log(mes);
});

//! Agrega elementos al arreglo dependiendo de la posicion
numeros[5] = 50;
numeros[6] = 90;

//! Agrega elementos al final del arreglo
numeros.push(10);
numeros.push(30);

//! Agrega elementos al principio del arreglo
numeros.unshift(-10);
numeros.unshift(-40);
numeros.unshift(-80);

//! Elimina el primer elemento del arreglo
numeros.shift();

//! Elimina el ultimo elemento del arreglo
numeros.pop();

//! Elimina uno o mas elementos (posicion del arreglo, numero de elementos hacia adelante)
numeros.splice(2,1);

console.table(numeros);
console.table(meses);

//! Syntaxis mas usada para agregar elementos a un arreglo es hace uno nuevo
const nuevoArreglo = [...meses, 'Junio'];
console.log(nuevoArreglo);