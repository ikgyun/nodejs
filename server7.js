const express = require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended:false}));

app.set('view engine','html');
nunjucks.configure('views',{
    express:app,
})

app.get('/',(req,res)=>{
    res.render('index.html');
});

app.post('/join2',(req,res)=>{
    res.render('join2.html',{
        id:req.body.name,
        pw:req.body.user_id,
        name:req.body.user_pw,
        gender:req.body.gender
    });
})

app.listen(3000,()=>{
    console.log('server start port : 3000');
})