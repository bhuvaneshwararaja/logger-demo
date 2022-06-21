const mysql = require('mysql2')

const connection = mysql.createConnection({
    host:"localhost",
    port:3306,
    database:"log",
    user:"root",
    password:"rootpw"
})

module.exports = connection
