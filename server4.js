// Nodejs -> 서버를 구축함.
// express 패키지 -> 서버만드는 녀석 
// nunjuks 패키지 -> 템플릿을 가져오는 녀석 -> html
const express = require('express');
const nunjucks = require('nunjucks');
const app = express();

app.set('view engine','html');
nunjucks.configure('views',{
    express:app,
})

app.get('/',(req,res)=>{
    //res.send("hello world");
    res.render('index.html');
})

app.get('/pat',(req,res)=>{
    //res.send("hello pat");
})

app.listen(3000,()=>{
    console.log('server port:3000');
})