const axios=require('axios');
module.exports={register(api){axios({
    method:"POST",
    url:"http://localhost:3000/register",
    headers:{'Content-Type':'application/json'},
    data:{
        apiName:api.apiName,
        host:api.HOST,
        port:api.PORT,
        protocol:api.protocol,
        url:api.protocol+"://"+api.HOST+':'+api.PORT+"/"
    }
}).then((response)=>{
    console.log(response.data);
}).catch((err)=>{
    console.log("Could not register API");
})}}
