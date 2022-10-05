//! Declarar funcion

function sumar() {
    console.log(10*10);
}

sumar();

//! Expresion de la funcion 
const sumar2 = function(){
    console.log(3+3);
}

sumar2();

//! IIFE (puede reservar variables para no ser usadas en otros archivos)
(function(){
    console.log('Esto es una funcion que se llama por si misma');
})();