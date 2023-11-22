const express = require('express');
const app = express(); // express라는 객체를 만들어준것.
const PORT = 8000;

// express에 사용할 템플릿 엔진 종류를 ejs로 등록.
app.set('view engine', 'ejs');
// 템플릿 엔진 파일 (.ejs)을 저장할 위치 등록
app.set('views', './views');

// static 미들웨어 등록 (정적 파일 로드 ex. css, js)
// static 라는 실제 폴더를 static 이름으로 접근하겠다.
// 2번째 파라미터는 실제 존재하는 폴더 이름 1번째 파라미터는 상관없이 지어도 된다.
// 응답하기전에 확인하고 보내준다.
app.use('/static', express.static(__dirname + '/static'));
// <!-- static 까지 경로를 한번에 지정 -->
console.log(__dirname); // ~~ 03_express


// app.get(경로, 해당 경로로 들어왔을 때 실행할 함수)
// localhost:8000/ 경로로 접속했을 때 
app.get('/', function (req, res){
    // res.send(응답 내용)
    // res.send('<h1>Hello Express!</h1>')

        // index라는 파일명을 찾아서 해당 파일 렌더
        // 값을 보내주는 방법 , {} 그리고 객체형태
    res.render("index", {
        btns : ['사과','오렌지', '키위'],
        isLogin : false,
        me : {
            name : 'Kim',
            msg: '반갑습니다.'
        }
    });
})

// /login 경로로 접속했을 때
app.get('/login', function (req, res){
    res.render('login');
})
// /register 경로로 접속했을 때
app.get('/register', function (req, res){
    res.render('register');
})

// app.get('/kdt', function (req, res){
//     // res.send(응답 내용)
//     res.send('<h1>Hello kdt!</h1>')
// })

// port를 열었다.
app.listen(PORT, function() {
    console.log(`server listening on ${PORT}`);
})