const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine', 'html');
nunjucks.configure('views',{
    express:app,
})

app.get('/',(req,res)=>{
   // res.send("hello world");]
   res.render('index.html');
})

app.post('/join',(req,res)=>{
   // res.send('hello pat');
   res.render('join.html',{
    id:req.body.name,
    pw:req.body.user_id,
    name:req.body.user_pw,
    gender:req.body.gender
   });
})

app.listen(3000,()=>{
    console.log('server port : 3000');
})