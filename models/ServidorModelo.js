const express = require('express')

//importar la funcion para conectar con la BD
const{conectarBD}=require('../database/conexion.js')

//importar lsa rutas

const rutas=require('../routes/rutas.js')

class ServidorModelo{

    constructor(){
        
        this.app = express()
        //this.despertarBD()
        this.llamarAuxiliares()
        this.enrutarPeticiones()

    }

    despertarServidor(){

        this.app.listen(process.env.PUERTO,function () {
            console.log("servidor encendido: " + process.env.PUERTO)
        })

    }

    enrutarPeticiones(){

        this.app.use('/',rutas)

    }

    despertarBD(){
        
        conectarBD()
    }

    llamarAuxiliares()
    {
        this.app.use(express.json())
    }
}




module.exports =ServidorModelo