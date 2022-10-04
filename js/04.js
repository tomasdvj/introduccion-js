//! String o cadena de texto
const producto = "Monitor de 20\"";
const producto2 = 'Monitor de 40 pulgadas';
const producto3 = new String('Monitor de 60 pulgadas');

console.log(producto.length);
console.log(producto2);
console.log(producto3);

//! IndexOf para encontrar un elemento en un string
console.log(producto2.indexOf('pulgadas'));

//! Includes retorna true o flase
console.log(producto2.includes('pulgadas'));