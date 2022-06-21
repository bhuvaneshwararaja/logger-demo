const express= require('express')
const helmet=require('helmet');
const app=express()
const PORT=3000;

app.use(helmet());
app.use(express.json())
const routes=require('./routes');

app.use('/', routes);

app.listen(PORT,()=>{
    console.log("Listening to gateway on port "+PORT)
});