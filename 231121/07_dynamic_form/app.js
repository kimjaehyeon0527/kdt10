const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index');
})

// Get
app.get('/ajax', (req, res) => {
    console.log(req.query);
    res.send(req.query);
})

// Post
app.post('/ajax', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

// axios
app.get('/axios', (req, res) => {
    console.log(req.query);
    res.send(req.query);

    // 의도적으로 에러 발생 시키기
    // Http response status codes (400~499) -> Client error responses
    // res.status(400).send('error msg!')
})
app.post('/axios', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})


// fetch
app.get('/fetch', (req, res) => {
    console.log(req.query);
    res.send(req.query);
})
app.post('/fetch', (req, res) => {
    console.log(req.body);
    res.send(req.body);
    // 이런 방법도 가능
    // res.send({name : req.body.name, gender : req.body.gender, msg: 'fetch 성공!'});
})

// 실습

const userId = "홍길동";
const userPw = "1234";

app.listen(PORT, () => {
    console.log(`server is opening ${PORT}`);
})