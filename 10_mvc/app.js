const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// [Before] MVC 적용 전에는 app.js에서 라우트 정의
// 단점: 라우터(경로)가 많아진다면? app.js 코드가 길어짐 -> 유지보수성 하락

// [After] MVC 적용 후 => Router 객체로 분리
const indexRouter = require('./routes/index'); // index는 생략 가능
const userRouter = require('./routes/user');
const testRouter = require('./routes/test');
app.use('/', indexRouter);  // localhost:PORT/ 경로를 기본으로 ./routes/index.js 파일에 선언한 대로 동작하겠다 라는 의미.
app.use('/user', userRouter);   // localhost:PORT/user 경로를 기본으로 ./routes/user.js 파일에 선언한 대로 동작.
app.use('/test', testRouter);

// [404 Error]
// 맨 마지막에 라우트로 선언 : 위에다 하게 되면 나머지 코드가 무시되게 때문에 
app.get('*', (req, res) => {
    res.render('404');
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})