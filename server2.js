// Nodejs -> 서버를 구축함.
// express 패키지 -> 서버만드는 녀석 
const express = require('express'); //express 를 가져와라.
const app = express();

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/hello',(req,res)=>{
    res.send('Hello 페이지입니다.');
})

app.listen(3001,()=>{
    console.log(`express start port : 3000`);
})