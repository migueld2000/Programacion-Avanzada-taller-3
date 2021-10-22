const {request, response}= require('express')

//crear un funcion para cada operacion del servidor

function registrarCliente(peticion=request, respuesta=response) {

    //nombre//edad//posicion//dorsal//equipo
    let datosPeticion=peticion.body

    respuesta.json
    ({
        mensaje:"registrando el cliente",
        datos:datosPeticion
    })

}

function buscarCliente(peticion=request, respuesta=response){

    //recibir el id a buscar
    let id=peticion.params.id

    respuesta.json
    ({
        mensaje:"buscando el cliente: "+id
    })
    
}

function buscarAbitacion(peticion=request, respuesta=response){
    
    respuesta.json
    ({
        mensaje:"buscando la abitacion"
    })

}

function editarCliente(peticion=request, respuesta=response){
    //recibir el id a editar
    let id=peticion.params.id

    let datosPeticion=peticion.body

    respuesta.json
    ({
        mensaje:"editando el cliente: "+id,
        datos:datosPeticion
    })

}

function eliminarCliente(peticion=request, respuesta=response){
    //recibir el id a eliminar
    let id=peticion.params.id
    respuesta.json
    ({
        mensaje:"eliminando el cliente: "+id
    })

}

module.exports = {

    registrarCliente,
    buscarCliente,
    buscarAbitacion,
    editarCliente,
    eliminarCliente

}