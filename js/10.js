//! Objetos

const nombreProducto = "Monitor 20 pulgadas";
const precio = 300;
const disponible = true;

//! Ejemplo de objeto
const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
}

console.log(nombreProducto);
console.log(precio);
console.log(disponible);
console.log(producto);
console.log(producto.nombreProducto);
console.log(producto.precio);
console.log(producto.disponible);

//! Otra forma de mostrar atributo del objeto
console.log(producto["nombreProducto"]);

//! Agregar atributos al objeto
producto.imagen = 'imagen.jpg';

//! Eliminar atributo de objeto
delete producto.disponible;