const express = require('express');
const 실습 = express();
const PORT = 8001;

실습.set('view engine', 'ejs');
실습.set('views', './views'); 


실습.use(express.urlencoded({extended: true})); // post 요청으로 들어오는 모든 형식의 데이터를 파싱
실습.use(express.json()); // json 형식으로 데이터를 주고 받음.

실습.get('/', (req, res) => {
    res.render('실습');
})

실습.get('/quest', (req, res) => {
    console.log(req.query);
    res.send(req.query);
})

실습.post('/quest', (req, res) => {
    console.log(req.body);
    res.send(req.body);
    
    
})

const userId = "aaaa";
const userPw = "1234";

실습.listen(PORT, function() {
    console.log(`${PORT} is opening!`);
})
