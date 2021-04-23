const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const mysql = require('mysql');

let connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'root',
    database: 'homepage'
})
connection.connect();

app.set('view engine', 'html');
nunjucks.configure('views2',{
    express:app,
})

app.get('/',(req,res)=>{
    res.render('index.html');
})


app.get('/list',(req,res)=>{
    res.render('list.html');
    connection.query('select * from board',(error,result)=>{
        if(error){
            console.log(error);
        }else{
            console.log(result[2].idx);
            
        }
    })
})

app.get('/view',(req,res)=>{
    res.render('view.html');
})

app.get('/write',(req,res)=>{
    res.render('write.html');
})

app.get('/modify',(req,res)=>{
    res.render('modify.html');
})

app.listen(3000,()=>{
    console.log('sever start port:3000');
})