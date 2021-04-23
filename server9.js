const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const mysql = require('mysql');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public')); // 익스프레스야 나 정적파일들(css,js,image,동영상)은 (public)안에있는 내용으로 만들꺼야
app.set('view engine','html');
nunjucks.configure('views',{
    express:app,
})

let connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'homepage'
})
connection.connect();

app.get('/',(req,res)  =>{
    res.render('index.html');
})

app.get('/list',(req,res) =>{
    //1. 데이터베이스 -> homepage ->board 테이블을 select문 활용하여 내용을 콘솔로그에 찍기.
    //2. 콘솔로그를 찍은 내용을 lst.html 데이터를 넘겨보죠 <- 눈작스 넘겨보기
    //3. 눈작스 구문배워오기
    connection.query("SELECT idx, subject,board_name,content,date_format(today,'%y-%m-%d')as today FROM board", (error, results)=>{
        if (error){
            console.log(error);
        }else{
           // console.log(results); //배열로 담겨져있어
            res.render('list.html',{
                list:results,            
            });
        }
    })
   
})

app.get('/write',(req,res) =>{
    res.render('board_write.html');
})

app.get('/view',(req,res) =>{
    console.log(req.query.idx);
   
    res.render('board_view.html');
})

app.post('/write',(req,res)=>{

    //db내용 처리한다음에 list.html넘어가면 됩니다.
    //내용을 수정하는 부분
    res.redirect('/list');
        console.log(req.body);
})

app.get('/modify',(req,res)=>{
    res.render('board_modify.html');
})

app.post('/modify',(req,res)=>{
    console.log(req.body);
    /*
    db내용 처리하는 부분
    해답내용 update하는 부분
    */
    res.redirect('/list');
})





app.listen(3000,()=>{
    console.log('server start port:3000');
})