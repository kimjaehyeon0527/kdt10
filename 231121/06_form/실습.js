const express = require('express');
const 실습 = express();
const PORT = 8001;

실습.set('view engine', 'ejs');
// 실습.set('/views', 'views');
실습.set('views', './views');       // view 템플릿 파일을 찾을 때 사용할 디렉토리 지정 // 기본적으로 views값이 디폴트 값이라서 알아서 찾아가준다.


실습.use(express.urlencoded({extended: true})); // post 요청으로 들어오는 모든 형식의 데이터를 파싱
실습.use(express.json()); // json 형식으로 데이터를 주고 받음.

실습.get('/', (req, res) => {
    res.render('실습');
})

실습.get('/quest', (req, res) => {
    // res.render('result2', { questInfo : req.query})
    res.render(req.query);
    // res.render('result2', {req.query})
})

// 실습.post('/quest', (req, res) => {
//     res.render('result2', { title: 'Post 실습' , questInfo : req.body})
// })

실습.listen(PORT, function() {
    console.log(`${PORT} is opening!`);
})

// Q1. 앞부분 실습. 관련  ---> express의 객체를 뜻하는 거라 맘대로 바꿔도 상관이없다 . 통일만 해주면 될 뿐
// Q2. post 사용할때 필수인가 ---> 필수이다.