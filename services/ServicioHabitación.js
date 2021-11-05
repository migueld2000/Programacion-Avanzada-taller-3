//encargado de realizar las operaciones en la BD

//importar el modelo de datos para poder operar en BD

const HabitacionModelo= require('../models/HabitacionModelo.js')

//1.funcion para insertar datos

async function insertarHabitacion(datos){

    let HabitacionNueva=new HabitacionModelo(datos)
    return await HabitacionNueva.save()

}

async function leerHabitacion(id) {

  let BuscarHabitacion = new HabitacionModelo.findById(id)
  return BuscarHabitacion

}

async function leerHabitaciones() {

  let HabitacionesBuscadas = new HabitacionModelo.find()
  return await HabitacionesBuscadas

}

async function borrarHabitacion(id) {

  return await HabitacionModelo.findByIdAndDelete(id)

}

async function modificarHabitacion(id,datos) {

  return await HabitacionModelo.findByIdAndUpdate(id, datos)

}

module.exports = {
  insertarHabitacion,
  leerHabitacion,
  leerHabitaciones,
  borrarHabitacion,
  modificarHabitacion,
}