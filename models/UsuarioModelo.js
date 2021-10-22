//se importan utilidades de mongoose

const { model, Schema } = require('mongoose')

//creamos el esquema de datos

const UsuarioModelo = Schema({

    nombre: {
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    },

    telefono: {
        type: String,
        required: true
    },
    cc:{
        type: String,
        required: true
    },
    fecha_inicio:{
        type: Date,
        required: true
    },
    fecha_fin:{
        type: Date,
        required: true
    },

    numero_personas: {
        type: String,
        required: true
    }

})

module.exports = model('Usuario', UsuarioModelo)