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
    // res.send(req.body);
    // 클라이언트에서 전달한 ID, PW와 서버에 저장된 ID, PW 비교
    const {ID, PW} = req.body;

    if(ID === userId && PW === userPw) {
        res.send({success:true});
    } else {
        res.send({success:false});
    }
    // userId, userPw 라는 변수 값과 클라이언트에서 넘겨받은 값이 일치하는지 검사
    if(ID === req.body.userId && PW === req.body.userPw) {
        res.send({userInfo : req.body, isSuccess: ture});
    } else {
        res.send({isSuccess: false});
    }
    // 결과 값을 반환.  
})


const userId = "aaaa";
const userPw = "1234";

실습.listen(PORT, function() {
    console.log(`${PORT} is opening!`);
})
