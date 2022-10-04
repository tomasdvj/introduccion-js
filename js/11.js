//! Ejemplo de objeto
const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
}

//! Forma anterior
// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;

//! Destructuring de objetos
const {precio,nombreProducto} = producto; //? Crea la variable y extrae el valor en un solo paso


console.log(precio);
console.log(nombreProducto);