//! Arrow functions
const sumar = (n1,n2) => {
    console.log(n1+n2);
}

sumar(10,5);

 //! Las llaves pueden ser opcionales cuando hay una linea
 //! Tambien se le pueden quitar los parentesis si hay un solo parametro
// const aprendiendo = tecnologia => console.log(`Aprendiendo: ${tecnologia}`);
const aprendiendo = (tecnologia) => {
    console.log(`Aprendiendo: ${tecnologia}`);
}

aprendiendo('JavaScript');