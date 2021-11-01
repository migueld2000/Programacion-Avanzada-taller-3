//importar la clase de express(router)
const { Router } = require('express')
//usar la clase de express(router)

const rutas_habitacion = Router()

//importar los controladores de las habitaciones

const { registrarHabitacion } = require('../controllers/ControladoresHabitacion.js')
const { buscarHabitacion } = require('../controllers/ControladoresHabitacion.js')
const { buscarHabitaciones } = require('../controllers/ControladoresHabitacion.js')
const { editarHabitacion } = require('../controllers/ControladoresHabitacion.js')
const { eliminarHabitacion } = require('../controllers/ControladoresHabitacion.js')

//importar los controladores de los usuarios

const { registrarUsuario } = require('../controllers/ControladoresUsuario.js')
const { buscarUsuario } = require('../controllers/ControladoresUsuario.js')
const { buscarUsuarios } = require('../controllers/ControladoresUsuario.js')
const { editarUsuario } = require('../controllers/ControladoresUsuario.js')
const { eliminarUsuario } = require('../controllers/ControladoresUsuario.js')

//listado de rutas de las habitaciones

rutas_habitacion.get('/habitaciones', buscarHabitaciones)

rutas_habitacion.get('/habitaciones/:id', buscarHabitacion)

rutas_habitacion.post('/habitaciones', registrarHabitacion)

rutas_habitacion.put('/habitaciones/:id', editarHabitacion)

rutas_habitacion.delete('/habitaciones/:id', eliminarHabitacion)

//listado de rutas de los buscarUsuarios

rutas_habitacion.get('/buscarUsuario', buscarUsuario)

rutas_habitacion.get('/buscarUsuarios/:id', buscarUsuarios)

rutas_habitacion.post('/registrarUsuario', registrarUsuario)

rutas_habitacion.put('/editarUsuario/:id', editarUsuario)

rutas_habitacion.delete('/eliminarUsuario/:id', eliminarUsuario)

//exportar las rutas

module.exports = rutas_habitacion
