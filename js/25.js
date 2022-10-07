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
];

//! foreach solo puede ser utilizado para iterar arreglos
carrito.forEach(producto => console.log(producto.nombre));

//! map se usa para crear un nuevo arreglo
const arreglo2 = carrito.map(producto => `${producto.nombre} - ${producto.precio}`);

console.log(arreglo2);
