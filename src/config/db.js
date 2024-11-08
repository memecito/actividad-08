const mysql = require('mysql2');

const pool = mysql. createPool({
    host: 'localhost',
    user: 'pruebas',
    password: 'Usuario01%',
    port: 3306,
    database: 'blog'
})


module.exports= pool.promise();