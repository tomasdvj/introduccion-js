async function obtenerEmpleados() {

    const archivo = 'empleados.json';
    // fetch(archivo)
        // .then( resultado => resultado.json())
        // .then ( datos => {
            // console.log(datos.empleados);

            // const { empleados } = datos;
            // console.log(empleados);

            //! Ejemplos
            // empleados.forEach( empleado => {
            //     console.log(empleado);
                // console.log(empleado.id);
                // console.log(empleado.nombre);
                // console.log(empleado.puesto);

                // document.querySelector('.contenido').textContent = empleado.nombre;
            // })

            //! Forma corta usando async await en vez de promises
            const resultado = await fetch(archivo);
            const datos = await resultado.json();
            console.log(datos);
}

obtenerEmpleados();