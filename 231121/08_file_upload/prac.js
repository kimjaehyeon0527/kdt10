// 복습하면서 만든것
const { log } = require('console');
const express = require('express');
const app = express();
const PORT = 8000;

const multer = require('multer');
const path = require('path');
const upload = multer({
  dest: 'uploads/',
});
// multer 세부 설정
const uploadDetail = multer({
  // storage: 저장할 공간에 대한 정보를 담고 있다.
  storage: multer.diskStorage({
    // destination: 경로를 설정
    destination(req, file, done) {
      // done: callback 함수
      // done(null, xx): null -> 에러가 없다는 의미
      done(null, 'uploads/'); // 파일을 업로드할 경로 설정
    },
    filename(req, file, done) {
      // 파일의 확장자를 추출 => "path" 모듈 활용
      const ext = path.extname(file.originalname); // 파일의 확장자 추출
      console.log('ext >', ext);
      console.log('file name >', path.basename(file.originalname, ext));
      // path.basename(file.originalname, ext) => apple => 확장자를 제외한 파일 이름만
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
      // 저장된 파일명이 똑같을 때, 시간을 의미하는  Date.now() 붙여서 중복된 값을 없애주려고 하는것이다.
    },
  }),
  // limits: 파일 제한 정보
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/', (req, res) => {
  res.render('prac');
});

// 1. 한개 파일
app.post('/upload', uploadDetail.single('userfile'), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.send('파일 업로드 완료!');
});

// 2. 한개 인풋에 여러개 파일
app.post('/upload/array', uploadDetail.array('userfiles'), (req, res) => {
  console.log(req.files);

  console.log(req.body);
  res.send('하나의 인풋에 여러 파일 업로드 완료!');
});

// 3. 여러 인풋 여러 파일
app.post(
  '/upload/fields',
  uploadDetail.fields([{ name: 'userfile1' }, { name: 'userfile2' }]),
  (req, res) => {
    console.log(req.files);
    console.log(req.body);
    res.send('여러개의 인풋에 각각의 파일 업로드 완료!');
  }
);

// 4. 동적 폼 전송
app.post('/dynamic', uploadDetail.single('dynamicFile'), (req, res) => {
  console.log('req.file >', req.file);
  console.log(req.body);
  res.send({ file: req.file, title: req.body.title });
});

app.listen(PORT, () => {
  console.log(`${PORT} port is opening`);
});
