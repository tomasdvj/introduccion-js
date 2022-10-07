//! this
const reservacion = {
    nombre: 'Juan',
    apellido: 'Vargas',
    salario: 5500,
    pagado: true,
    //! Si se usa arrow function (=>) this apuntara a windows, no a la funcion en si por lo que dará como resultado "undefined"
    informacion: function(){
        if(this.pagado == false){
            console.log(`El empleado ${this.nombre} ${this.apellido} tiene un salario de: ${this.salario} y su estado es no pagado`);
        }else{
            console.log(`El empleado ${this.nombre} ${this.apellido} tiene un salario de: ${this.salario} y su estado es pagado`);
        }
    }
}

reservacion.informacion();