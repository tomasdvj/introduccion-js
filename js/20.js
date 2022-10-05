
const reproductor = {
    reproducir : function(id){
        console.log(`Reproduciendo cancion con el ID: ${id}`);
    },
    pausa : function(){
        console.log('Pausando...');
    },
    crearPlaylist : function(nombre){
        console.log(`Creando la playlist con el nombre: ${nombre}`);
    },
    reproducirPlaylist : function(nombre){
        console.log(`Reproduciendo la playlist con el nombre: ${nombre}`);
    }
}

reproductor.borrarCancion = function(id){
    console.log(`Eliminando la cacion: ${id}`);
}

reproductor.reproducir(3840);
reproductor.pausa();
reproductor.borrarCancion(2020);
reproductor.crearPlaylist('Heavy Metal');
reproductor.reproducirPlaylist('Heavy Metal');