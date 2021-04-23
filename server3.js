const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send(`hello world`);
})

app.get('/pat',(req,res)=>{
    res.send(`hello pat`);
})

app.listen(3000,()=>{
    console.log(`server port:3000`);
})