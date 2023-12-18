const express = require('express');
const app = express();
const PORT = 8000;
const db = require('./models/index');

app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const indexRouter = require('./routes/user'); // user.js // localhost:8000/user 가 기본 경로
// app.use('/user', indexRouter);

app.get('*', (req, res) => {
    res.render('404');
})

db.sequelize.sync({force: false}).then(() => {
    
    // force: false => 테이블이 없으면 생성
    // force: true => 테이블 무조건 생성 (만약 DB가 있다면 다 삭제하고 다시 생성 -> prod에서 사용 X)
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    })
})