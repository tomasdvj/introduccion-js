//! Async / Await

function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log('Descargando clientes... Por favor espere...');

        setTimeout( () => {
            resolve('Los clientes fueron descargados');
        }, 5000);
    } );
}

function descargarUltimosPedidos() {
    return new Promise( resolve => {
        console.log('Descargando pedidos... Por favor espere...');

        setTimeout( () => {
            resolve('Los pedidos fueron descargados');
        }, 3000);
    } );
}

async function app() {
    try {
        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarUltimosPedidos();
        // console.log(clientes);
        // console.log(pedidos);
        //! Optimizacion para llamar dos funciones async
        const resultado = await Promise.all([ descargarNuevosClientes(), descargarUltimosPedidos()]);
        let i=0;
        // console.log(resultado[0]);
        // console.log(resultado[1]);
        while(i<resultado.length){
            console.log(resultado[i]);
            i++;
        }
    } catch (error) {
        console.log(error);
    }
}

app();