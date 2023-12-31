const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const indexRouter = require('./routes/user'); // user.js // localhost:8000/user 가 기본 경로
app.use('/user', indexRouter);

app.get('*', (req, res) => {
    res.render('404');
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})