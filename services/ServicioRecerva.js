//encargado de realizar las operaciones en la BD

//importar el modelo de datos para poder operar en BD

const ServidorModelo=require('../models/ServidorModelo.js')

async function insertarUsuario(datos){

    let UsuarioNuevo = new ServidorModelo(datos)
    return await UsuarioNuevo.save()

}

async function leerUsuario(id){

    let BuscarUsuario = new ServidorModelo.findById (id)
    return await BuscarUsuario.save()

}

async function leerUsuarios(){

    let UsuariosBuscados = new ServidorModelo.find()
    return await UsuariosBuscados.save()

}

async function modificarUsuario(id){

    return await ServidorModelo.findByIdAndDelete(id)

}

async function borrarUsuario(id,datos){

    return await ServidorModelo.findByIdAndUpdate(id,datos)

}

module.exports = {
  insertarUsuario,
  leerUsuario,
  leerUsuarios,
  modificarUsuario,
  borrarUsuario,
};