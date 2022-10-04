//! Ejemplo de objeto
const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
}

const medidas = {
    peso : "200kg",
    medida : '1cm'
}

const nuevoProducto = { ...producto, ...medidas };

console.log(producto);
console.log(nuevoProducto);