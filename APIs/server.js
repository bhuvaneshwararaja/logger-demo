const { default: axios } = require('axios');
const express=require('express');
const register=require('./register');// API registration
const app=express();

api={ 
  apiName:'registerapi',
  HOST:"localhost",
  PORT:'4000',
  protocol:'http'}

app.use(express.json());

app.get('/fakeapi',(req,res)=>{
    console.log(req.query);
    res.send("Hello from fake API");
})

app.post('/boogus',(req,res)=>{
    console.log(req.query)
    res.send({reqID:req.query.logid,message:"works"});
})

app.listen(api.PORT,()=>{

    //register API
    register.register(api);

    console.log("Fake API listening in port "+api.PORT);
})