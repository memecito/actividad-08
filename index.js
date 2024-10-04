const express = require('express');

//Config .env
require ('dotenv').config();
const port = process.env.PORT || 3333;

const app= express();




app.listen(port,()=>{
    console.log(`Servidor levantado, puerto de escucha ${port}`)
})
