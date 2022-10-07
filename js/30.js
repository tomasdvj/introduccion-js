//! Promises
const usuarioAutenticado = new Promise( (resolve,reject) => {
    const auth = true;

    if(auth) {
        resolve('Usuario autenticado'); //! El promise se cumple
    } else {
        reject('No se pudo iniciar sesion');   //! El promise no se cumple
    }
});

usuarioAutenticado
    .then( resultado => console.log(resultado))
    .catch( error => console.log(error))

//! En los promises existen 3 valores
//! Pending: no se ha cumplido pero tampoco se ha rechazado
//! fulfilled: ya se cumplio el promise
//! rejected: rechazado o no se pudo cumplir