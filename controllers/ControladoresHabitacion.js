const {request, response}= require('express')

const { insertarHabitacion } = require('../services/ServicioHabitación.js')
const { leerHabitacion } = require('../services/ServicioHabitación.js')
const { leerHabitaciones } = require('../services/ServicioHabitación.js')
const { borrarHabitacion} = require('../services/ServicioHabitación.js')
const { modificarHabitacion } = require('../services/ServicioHabitación.js')

//crear un funcion para cada operacion del servidor

async function registrarHabitacion(peticion=request, respuesta=response) {

 let datosPeticion=peticion.body
 try {
     await insertarHabitacion(datosPeticion)
     respuesta.status(200).json({
         estado:true,
         mensaje:"Exito al registrar la habitacion"
     })
     
 } catch (error) {
     respuesta.status(400).json({
         estado:false,
         mensaje:"Error al registrar la habitacion" + error
     })
 }

}

async function buscarHabitacion (peticion=request, respuesta=response){

    try {
        let id=peticion.params.id
        let habitacion = await leerHabitacion (id)
        respuesta.status(200).json({
            estado:true,
            mensaje:habitacion
        })
    } catch (error) {
        respuesta.status(400).json({
            estado:false,
            mensaje:"Error al buscar la habitacion: " + error
        })
    }

}

async function buscarHabitaciones (peticion=request, respuesta=response){
    
    try {
        let habitaciones= await leerHabitaciones ()
        respuesta.status(200).json({
            estado:true,
            mensaje:"Exito al buscar las habitaciones"
        })
    } catch (error) {
        respuesta.status(400).json({
            estado:false,
            mensaje:"Error al buscar la habitacion: "+ error
        })
        
    }

}

async function editarHabitacion(peticion=request, respuesta=response){
    //recibir el id a editar
    try {
        let id = peticion.params.id
        let datosPeticion = peticion.body

        await modificarHabitacion(id, datosPeticion)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Exito al editar la habitacion"
        })
    } catch (error) {
        respuesta.status(400).json({
            estado:false,
            mensaje:"Error al editar la habitacion: "+error
        })
    }

}

async function eliminarHabitacion(peticion=request, respuesta=response){
    //recibir el id a eliminar
    try {
        let id = peticion.params.id;
        await borrarHabitacion(id)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Exito al borrar la Habitacion"
        })
    } catch (error) {
        respuesta.status(400).json({
            estado:false,
            mensaje:"Error al borrar la habitacion: " + error
        })
    }

}

module.exports = {

    registrarHabitacion,
    buscarHabitacion,
    buscarHabitaciones,
    editarHabitacion,
    eliminarHabitacion

}