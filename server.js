require('dotenv').config();
const express = require('express');
const nunjucks = require('nunjucks');
const mysql = require('mysql');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.SERVER_PORT;


app.set('view engine', 'html');
nunjucks.configure('views', {
    express: app,
    autoescape: true,
});

app.use(bodyParser.urlencoded({ extended: true }));
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ick',
});
connection.connect();

app.get('/', (req, res) => {
    res.render('index.html', {
        name: 'ick',
    })
})

app.post('/join', (req, res) => {
    /*
        req.body 에 있는 내용들을 하나씩 가져와보기
        query문을 작성해봅시다 (sql문 작성하는데 insert ito user ...)
        실제로 쿼리문을 실행시킵니다.
        실행이 완료가 되면 
        join.html을 실행시켜봅시다.(id,pw,name)보내서 실행시킵니다.
    */
    let id = req.body.user_id;
    let pw = req.body.user_pw;
    let name = req.body.name;
    let gen = req.body.gender;
    let sql = `insert into uzer(userid,userpw,username,usergender) values('${id}','${pw}','${name}','${gen}')`;
    connection.query(sql,(error,results)=>{
        if(error){
            console.log(error);
        }else{
            console.log(results);
            res.render('join.html',{
                id:id,
                pw:pw,
                name:name,
                gen:gen
            })
        }
    })
})

app.listen(port, () => {
    console.log(`server start port: ${port}`);
})

