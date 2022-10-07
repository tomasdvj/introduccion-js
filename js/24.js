//! for loop
for ( let i=1; i<=10; i++){
    if( i%2 == 0){
        console.log(`Iteracion de ciclo for: ${i} y es par`);  
    }else{
        console.log(`Iteracion de ciclo for: ${i} y es impar`);
    }
}

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

//! for loop recorriendo un arreglo
for ( let i = 0; i < carrito.length; i++){
    console.log(carrito[i].nombre);
}

//! while loop
let j = 1;
while(j<=10){
    console.log(`Iteracion con while ${j}`);
    j++;
}

//! do while
let k = 1
do{
    console.log(`Iteracion do while: ${k}`);
    k++;
}while( k <= 10);