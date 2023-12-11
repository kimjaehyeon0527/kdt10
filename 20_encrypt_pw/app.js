const express = require('express');
const app = express();
const PORT = 8000;
const db = require('./models/index');

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended : true}));
app.use(express.json());

const indexRouter = require('./routes');
app.use('/', indexRouter);


app.get('*', (req, res) => {
    res.render('404');
})

db.sequelize.sync({ force: false }).then(() => {
    // froce: false => 테이블이 없으면 생성
    // force: true => 테이블 무조건 생성( 만약 db가 있다면 다 삭제하고 다시 생성 -> prod에서 사용 x

    app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
    })
})