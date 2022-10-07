//! POO

//? Object literal
const producto = {
    nombre: 'Tomas',
    precio: 200
}

//? Object constructor
function Producto(nombre,precio) {
    this.nombre = nombre;
    this.precio = precio;
}

//! Crear funciones  que solo se utilizan en un objeto especifico
Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
}

const producto2 = new Producto('Tomas', 300);
const producto3 = new Producto('ola', 5000);

function formatearProducto(producto){
    return `El producto ${producto.nombre} tiene un precio de: ${producto.precio}`;
}

console.log(producto2.formatearProducto());
console.log(producto3);

