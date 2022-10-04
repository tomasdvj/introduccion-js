// "use strict"; //! Correr JavaScript en modo estricto
//! Ejemplo de objeto
const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
}


// Object.seal(producto); //! Solamente permite modificar
// Object.freeze(producto); //! No permite modificar agregar o eliminar

producto.imagen = 'imagen.jpg';

console.log(Object.isFrozen(producto));

console.log(producto);