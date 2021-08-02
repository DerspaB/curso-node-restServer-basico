require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {

    constructor () {
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/users'

        // Conectar a la base de datos
        this.conectarDb();
        // Middlewares son funciones que siempre se ejecutaran al inicar el servidor
        this.middlewares();
        //Rutas de mi aplicación
        this.routes();
    }

    async conectarDb() {
        await dbConnection();
    }

    middlewares() {

        // CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio publico
        this.app.use( express.static('public') );
    }

    routes(){
        this.app.use(this.userPath, require('../routes/users'));
    }

    listen() {

        this.app.listen(this.port, () =>{
            console.log(`This app is listening in the port ${this.port}`);
        });
    }

}

module.exports = Server;