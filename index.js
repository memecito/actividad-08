//Configuracion y creacion del server
const http= require('http');
const app= require('./src/app');

//configuracion .env
require('dotenv').config();

//Creacion del server
const server= http.createServer(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT);

//Listeners
server.on('listening',()=>{
    console.log(`Servicio escuchando en el puerto ${PORT}`);
});

server.on('error',(error)=>{
    console.log(error);
});