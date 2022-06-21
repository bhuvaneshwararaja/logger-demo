const express = require('express')

const app = express()

const authRoutes = require("./api/routes/authService")
const connection = require('./api/dbConnection/db')



connection.connect((err) => {
    if(err) console.log(err)
    console.log("Db connected")
})

app.use(express.json())
app.use('/auth', authRoutes)


module.exports = app