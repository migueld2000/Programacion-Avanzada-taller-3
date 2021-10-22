//importar la clase de express(router)
const{Router}= require('express')

//usar la clase de express(router)

const rutas=Router()


//importar los controladores de las habitaciones

const {registrarHabitacion}= require('../controllers/controlaadores-habitacion.js')
const {buscarHabitacion}= require('../controllers/controlaadores-habitacion.js')
const {buscarHabitaciones}= require('../controllers/controlaadores-habitacion.js')
const {editarHabitacion}= require('../controllers/controlaadores-habitacion.js')
const {eliminarHabitacion}= require('../controllers/controlaadores-habitacion.js')

//importar los controladores de los usuarios

const {registrarUsuario}= require('../controllers/controladores-usuario.js')
const {buscarUsuario}= require('../controllers/controladores-usuario.js')
const {buscarUsuarios}= require('../controllers/controladores-usuario.js')
const {editarUsuario}= require('../controllers/controladores-usuario.js')
const {eliminarUsuario}= require('../controllers/controladores-usuario.js')

//listado de rutas de las habitaciones

rutas.get('/habitaciones',buscarHabitaciones) 

rutas.get('/habitaciones/:id',buscarHabitacion) 

rutas.post('/habitaciones',registrarHabitacion) 

rutas.put('/habitaciones/:id',editarHabitacion)

rutas.delete('/habitaciones/:id',eliminarHabitacion) 

//listado de rutas de los buscarUsuarios

rutas.get('/buscarUsuario',buscarUsuario) 

rutas.get('/buscarUsuarios/:id',buscarUsuarios) 

rutas.post('/registrarUsuario',registrarUsuario) 

rutas.put('/editarUsuario/:id',editarUsuario)

rutas.delete('/eliminarUsuario/:id',eliminarUsuario)

//exportar las rutas

  module.exports=rutas