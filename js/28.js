//! Clases
class Producto {
    constructor(nombre, precio){
        this.nombre=nombre;
        this.precio=precio;
    }

    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
    }

    formatearPrecio(){
        return `El precio del producto es: ${this.precio}`;
    }
}

const producto = new Producto('Monitor curvo 40 pulgadas', 5500);

//! Herencia
class Libro extends Producto{
    constructor(nombre,precio,isbn){
        super(nombre,precio);
        this.isbn=isbn;
    }

    formatearProducto(){
        return `${super.formatearProducto()} y su ISBN es: ${this.isbn}`;
    }

    formatearPrecio(){
        return `${super.formatearPrecio()} y si hay existencia.`;
    }
}

const libro = new Libro('Papelucho',4300,'893434793498');

console.log(libro.formatearProducto());
console.log(producto);
console.log(producto.formatearPrecio());
console.log(libro.formatearPrecio());