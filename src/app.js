//Creacion y configuracion de Express APP
const express = require('express');
const cors = require('cors');

const app= express()
app.use(express.json());
app.use(cors());

//Configuracion de Rutas
app.use('/api', require('./routes/apiRoutes'));


//Manejador de Errores
app.use((err, reg, res, next)=>{
    //gestion de errores de forma generica
    console.log(err.stack)
    res.status(500).json(err);
})

module.exports= app;
