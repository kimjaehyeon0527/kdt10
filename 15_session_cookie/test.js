const express = require('express');
const session = require('express-session')
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(session({
    secret: 'mySessionSecret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        maxAge: 60 * 1000
    }
}))

app.get('/', (req, res) => {
    res.render('test');
})

app.post('/', (req, res) => {
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

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})

