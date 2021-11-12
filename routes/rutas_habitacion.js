//importar la clase de express(router)
const { Router } = require('express')
//usar la clase de express(router)

const rutas= Router()

//importar los controladores de las habitaciones

const { registrarHabitacion } = require('../controllers/ControladoresHabitacion.js')
const { buscarHabitacion } = require('../controllers/ControladoresHabitacion.js')
const { buscarHabitaciones } = require('../controllers/ControladoresHabitacion.js')
const { editarHabitacion } = require('../controllers/ControladoresHabitacion.js')
const { eliminarHabitacion } = require('../controllers/ControladoresHabitacion.js')

//importar los controladores de los usuarios

const { registrarCliente } = require("../controllers/ControladoresUsuario.js");
const { buscarCliente } = require("../controllers/ControladoresUsuario.js");
const { buscarClientes } = require("../controllers/ControladoresUsuario.js");
const { editarCliente } = require("../controllers/ControladoresUsuario.js");
const { eliminarCliente } = require("../controllers/ControladoresUsuario.js");

//listado de rutas de las habitaciones

rutas.get('/buscarhabitacion/:id', buscarHabitacion)

rutas.get('/buscarHabitaciones', buscarHabitaciones)

rutas.post('/registrarHabitaciones', registrarHabitacion)

rutas.put('/editarHabitaciones/:id', editarHabitacion)

rutas.delete('/eliminarHabitacion/:id', eliminarHabitacion)

//listado de rutas de los buscarUsuarios


rutas.get("/buscarUsuarios", buscarClientes);

rutas.get("/buscarUsuario/:id",buscarCliente)

rutas.post("/registrarUsuario", registrarCliente);

rutas.put("/editarUsuario/:id", editarCliente)

rutas.delete("/eliminarUsuario/:id", eliminarCliente)

//exportar las rutas

module.exports = rutas
