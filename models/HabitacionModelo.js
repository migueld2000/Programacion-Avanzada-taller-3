//se importan utilidades de mongoose

const { model, Schema } = require('mongoose')

//creamos el esquema de datos

const HabitacionModelo = Schema({

    nombre_habitacion: {
        type: String,
        required: true
    },
    fotografia_habitacion:{
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    precio_niño_noche: {
        type: String,
        required: true
    },
    precio_adulto_noche: {
        type: String,
        required: true
    }
})

module.exports = model('Habitacion', HabitacionModelo)