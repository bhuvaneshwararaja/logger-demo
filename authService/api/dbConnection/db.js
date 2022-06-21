const mysql = require('mysql2')

const connection = mysql.createConnection({
    host:"localhost",
    port:3306,
    database:"user",
    user:"test",
    password:"testpw"
})

module.exports = connection
