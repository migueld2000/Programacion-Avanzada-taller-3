const {request, response}= require('express')

//crear un funcion para cada operacion del servidor

function registrarHabitacion(peticion=request, respuesta=response) {

    //nombre//edad//posicion//dorsal//equipo
    let datosPeticion=peticion.body

    respuesta.json
    ({
        mensaje:"registrando el jugador",
        datos:datosPeticion
    })

}

function buscarHabitacion(peticion=request, respuesta=response){

    //recibir el id a buscar
    let id=peticion.params.id

    respuesta.json
    ({
        mensaje:"buscando el jugador: "+id
    })
    
}

function buscarCliente(peticion=request, respuesta=response){
    
    respuesta.json
    ({
        mensaje:"buscando los jugadores"
    })

}

function editarHabitacion(peticion=request, respuesta=response){
    //recibir el id a editar
    let id=peticion.params.id

    let datosPeticion=peticion.body

    respuesta.json
    ({
        mensaje:"editando el jugador: "+id
    })

}

function eliminarHabitacion(peticion=request, respuesta=response){
    //recibir el id a eliminar
    let id=peticion.params.id
    respuesta.json
    ({
        mensaje:"eliminando el jugador: "+id
    })

}

module.exports = {

    registrarHabitacion,
    buscarHabitacion,
    editarHabitacion,
    buscarCliente,
    eliminarHabitacion

}