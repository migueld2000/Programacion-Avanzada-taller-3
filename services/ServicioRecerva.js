//encargado de realizar las operaciones en la BD

//importar el modelo de datos para poder operar en BD

const UsuarioModelo= require("../models/UsuarioModelo.js")

async function insertarUsuario(datos){

    let UsuarioNuevo = new UsuarioModelo(datos)
    return await UsuarioNuevo.save()

}

async function leerUsuario(id){

    let BuscarUsuario = await UsuarioModelo.findById(id)
    return BuscarUsuario

}

async function leerUsuarios(){

    let UsuariosBuscados = await UsuarioModelo.find()
    return UsuariosBuscados

}

async function modificarUsuario(id, datos) 
{
  return await UsuarioModelo.findByIdAndUpdate(id, datos)
}

async function borrarUsuario(id){

    return await UsuarioModelo.findByIdAndDelete(id)

}

module.exports = {
  insertarUsuario,
  leerUsuario,
  leerUsuarios,
  modificarUsuario,
  borrarUsuario,
};