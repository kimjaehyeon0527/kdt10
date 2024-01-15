const express = require('express');
const app = express();
const PORT = 8000;

const multer = require('multer');
const path = require('path');
const upload = multer({
  dest: 'uploads/',
});

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/', (req, res) => {
  res.render('prac');
});

app.listen(PORT, () => {
  console.log(`${PORT} port is opening`);
});
