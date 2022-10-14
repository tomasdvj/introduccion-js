
const boton = document.querySelector('#boton'); //! Se crea variable con elemento de HTML, en este caso boton con un id=boton

boton.addEventListener('click', function(){
    Notification.requestPermission()
        .then(resultado => console.log('El resultado es: ', resultado))
})

if(Notification.permission == 'granted') {
     new Notification('Esta es una notificacion', {
        icon: 'img/logo.png',
        body: 'Codigo con juan'
     })
}