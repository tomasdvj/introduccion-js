//! Arrazy methods
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    { nombre: 'Monitor 20 pulgadas', precio: 300 },
    { nombre: 'Television 50 pulgadas', precio: 500 },
    { nombre: 'Tablet', precio: 3000 },
    { nombre: 'Telefono inteligente', precio: 100 },
    { nombre: 'Audifonos', precio: 600 },
    { nombre: 'Mouse Razer', precio: 200 },
    { nombre: 'Teclado Logitech', precio: 7000 },
    { nombre: 'Notebook Lenovo', precio: 2350 },
    { nombre: 'Tarjeta Grafica RTX', precio: 150 }
]

meses.forEach(function(mes){
    console.log(mes);
    if(mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});

//! Includes
let resultado = meses.includes('Marzo');
console.log(resultado);

//! Some ideal para arreglo de objetos
resultado = carrito.some(function(producto){
    return producto.nombre === 'Audifonos';
});

//! Reduce 
resultado = carrito.reduce(function(total,producto){
    return total+producto.precio;
}, 0);

//! filter
resultado = carrito.filter(function(producto){
    return producto.precio > 400;
});

console.log(resultado);