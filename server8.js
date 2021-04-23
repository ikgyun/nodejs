const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const bodyParser= require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

app.set('view engine','html');
nunjucks.configure('views',{
    express:app,
})

app.get('/',(req,res)=>{
    res.render('index.html');    
})

app.post('/join2',(req,res)=>{
    res.render('join2.html',{
        id: req.body.user_id,
        pw: req.body.user_pw,
        name: req.body.name,
        gender:req.body.gender
    });
})

app.listen(3000,()=>{
    console.log('sever start port:3000');
})