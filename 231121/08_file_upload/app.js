const express = require('express');
const app = express();
const PORT = 8000;

// multer 관련 설정
const multer = require('multer');
const path = require('path'); // 경로에 관한 내장 모듈
const upload = multer({
  dest: 'uploads/', // dest: 클라이언트가 업로드한 파일을 저장할 서버측 경로
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
// static 등록 => 이미지 경로 접근(프론트)
app.use('/uploads', express.static(__dirname + '/uploads')); // 프론트에서 이 경로(첫번째 경로)로 들어오면은 여기로(두번째 경로) 보내라

app.get('/', (req, res) => {
  res.render('index');
});

//  1. single(): 하나의 파일을 업로드
// upload.single('userfile') : 클라이언트 요청이 들어오면,
// multer 설정(upload)에 따라 파일을 업로드 한 후, req.file 객체를 생성.
// single() 인자는 input 태그의 name 값과 일치시켜야 함.
app.post('/upload', uploadDetail.single('userfile'), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.send('파일 업로드 완료!');

  // req.file 객체
  /*
        {
            fieldname: 'userfile',  // 폼에 정의한 name 값
            originalname: 'á\x84\x87á\x85®á\x86¯á\x84\x90á\x85¢á\x84\x8Bá\x85¯á\x86»á\x84\x8Bá\x85¥.png',   // 원본 파일명
            encoding: '7bit',   // 파일 인코딩 타입
            mimetype: 'image/png',  // 파일 타입
            destination: 'uploads/',    // 파일 저장 경로
            filename: 'á\x84\x87á\x85®á\x86¯á\x84\x90á\x85¢á\x84\x8Bá\x85¯á\x86»á\x84\x8Bá\x85¥1701055637752.png',  // 저장된 파일명
            path: 'uploads/á\x84\x87á\x85®á\x86¯á\x84\x90á\x85¢á\x84\x8Bá\x85¯á\x86»á\x84\x8Bá\x85¥1701055637752.png',  // 업로드 된 파일 전체 경로
            size: 417013    // 파일 크기
        }
    */
});
//  2. array() : 하나의 인풋에 여러 파일 업로드
app.post('/upload/array', uploadDetail.array('userfiles'), (req, res) => {
  // [{file1 정보}, {file2 정보}, ...,] : 배열 형태
  console.log(req.files);
  console.log(req.body);
  res.send('하나의 인풋에 여러 파일 업로드 완료!');
});

//  3. fileds() : 여러 파일을 각각의 인풋에 업로드 하는 경우.
app.post(
  '/upload/fields',
  uploadDetail.fields([{ name: 'userfile1' }, { name: 'userfile2' }]),
  (req, res) => {
    console.log(req.files);
    console.log(req.body);
    res.send('여러개의 인풋에 각각의 파일 업로드 완료!');
  }
);

/*
        {
            userfile1: [
                {파일 정보}
            ],
            userfile2: [
                {파일 정보}
            ]
        }
    */
// 동적 폼 전송
app.post('/dynamic', uploadDetail.single('dynamicFile'), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.send({ file: req.file, title: req.body.title });
});

app.listen(PORT, () => {
  console.log(`${PORT} port is opening!`);
});
