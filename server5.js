const express = require('express');
const app = express();
const nunjucks = require('nunjucks');

app.set('view engine', 'html');
nunjucks.configure('views',{
    express:app,
})

app.get('/',(req,res)=>{
    //res.send('hello world');
    res.render('index.html');
})

app.get('/pat',(req,res)=>{
    //res.send('hello pat');
    res.render('join.html');
})

app.listen(3000, ()=>{
    console.log('server port:3000');
})