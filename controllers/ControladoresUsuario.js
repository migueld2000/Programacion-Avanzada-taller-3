const {request, response}= require('express')

const { insertarUsuario } = require('../services/ServicioRecerva.js')
const { leerUsuario } = require('../services/ServicioRecerva.js')
const { leerUsuarios } = require('../services/ServicioRecerva.js')
const { borrarUsuario} = require('../services/ServicioRecerva.js')
const { modificarUsuario } = require('../services/ServicioRecerva.js')


//crear un funcion para cada operacion del servidor

async function registrarCliente(peticion=request, respuesta=response) {

    //nombre//edad//posicion//dorsal//equipo
 try {
   let datosPeticion = peticion.body
   await insertarUsuario(datosPeticion)
   respuesta.status(200).json({
     estado: true,
     mensaje: "Exito al registrar la habitacion"
   })
 } catch (error) {
   respuesta.status(400).json({
     estado: false,
     mensaje: "Error al registrar el usuario" + error
   })
 }

}

async function buscarCliente(peticion=request, respuesta=response){

    //recibir el id a buscar
    try {
      let id = peticion.params.id
      let usuario = await leerUsuario(id)
      respuesta.status(200).json({
        estado: true,
        mensaje: usuario
      })
    } catch (error) {
      respuesta.status(400).json({
        estado: false,
        mensaje: "Error al buscar la habitacion: " + error
      })
    }
}

async function buscarClientes(peticion = request, respuesta = response) {
  //recibir el id a buscar
    try {
      let usuario = await leerUsuarios()
      respuesta.status(200).json({
        estado: true,
        mensaje: usuario
      });
    } catch (error) {
      respuesta.status(400).json({
        estado: false,
        mensaje: "Error al buscar la habitacion: " + error
      })
    }
}


async function editarCliente(peticion=request, respuesta=response){
    //recibir el id a editar
    try {
      let id = peticion.params.id
      let datosPeticion = peticion.body

      await modificarUsuario(id, datosPeticion)
      respuesta.status(200).json({
        estado: true,
        mensaje: "Exito al editar la habitacion"
      })
    } catch (error) {
      respuesta.status(400).json({
        estado: false,
        mensaje: "Error al editar la habitacion: " + error
      })
    }

}

async function eliminarCliente(peticion=request, respuesta=response){
    //recibir el id a eliminar
     try {
       let id = peticion.params.id

       await borrarUsuario(id)
       respuesta.status(200).json({
         estado: true,
         mensaje: "Exito al borrar al jugaor"
       })
     } catch (error) {
       respuesta.status(400).json({
         estado: false,
         mensaje: "Error al borrar al jugaor: " + error
       })
     }

}

module.exports = {
  registrarCliente,
  buscarCliente,
  buscarClientes,
  editarCliente,
  eliminarCliente,
}