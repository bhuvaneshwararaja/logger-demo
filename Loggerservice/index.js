const express=require('express');
const connection = require('./db/db');
const loggerRoutes=require('./routes/loggerservice')
const app=express()
app.use(express.json());

app.use('/log',loggerRoutes)

connection.connect((err)=>{
    if(err) console.log("DB not conneted",err);
    else console.log("DB connected successfully");
})

app.listen(3001,()=>{
    console.log("Listening at 3001");
})