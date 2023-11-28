const express = require('express');
const app = express();
const PORT = 8001;

const multer = require('multer');
const path = require('path');       // 경로에 관한 내장 모듈
const upload = multer({
    dest: 'uploads/', // dest: 클라이언트가 업로드한 파일을 저장할 서버측 경로
})

// multer 세부 설정
const uploadDetail = multer({
    // storage: 저장할 공간에 대한 정보를 담고 있다.
    storage: multer.diskStorage({
        // destination: 경로를 설정
        destination(req, file, done) {
            // done: callback 함수
            // done(null, xx): null -> 에러가 없다는 의미
            done(null, 'uploads/');     // 파일을 업로드할 경로 설정
        },
        filename(req, file, done) {
            // 파일의 확장자를 추출 => "path" 모듈 활용
            const ext = path.extname(file.originalname);        // 파일의 확장자 추출
            const id = req.body.Id;
            done(null, id + ext);
        }
    }),
    // limits: 파일 제한 정보
    limits: {
        fileSize: 5 * 1024 * 1024
    }
})

// multer 세부 설정 - 실습용
// uploadPractice : (미들웨어) 중간역할을 하기 위해 -> 요청에 대한 처리를 위해 객체로 받아야하고 req가 있는 것
// body로 접근
const uploadPractice = multer({
    // storage: 저장할 공간에 대한 정보를 담고 있다.
    storage: multer.diskStorage({
        // destination: 경로를 설정
        destination(req, file, done) {
            // done: callback 함수
            // done(null, xx): null -> 에러가 없다는 의미
            done(null, 'uploads/');     // 파일을 업로드할 경로 설정
        },
        filename(req, file, done) {
            console.log('filename > req:body', req.body);
            // 파일의 확장자를 추출 => "path" 모듈 활용
            const ext = path.extname(file.originalname);        // 파일의 확장자 추출
            const id = req.body.Id;
            done(null, id + ext);
        }
    }),
    // limits: 파일 제한 정보
    limits: {
        fileSize: 5 * 1024 * 1024
    }
})

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
// static 등록 => 이미지 경로 접근(프론트) 
app.use('/upload', express.static(__dirname + '/uploads'));    // 프론트에서 이 경로(첫번째 경로)로 들어오면은 여기로(두번째 경로) 보내라

app.get('/', (req, res) => {
    res.render('실습');
})

app.post('/upload', uploadDetail.single('userfile'), (req, res) => {
    console.log(req.file);
    console.log(req.body);
    const imageUrl = `/upload/${req.file.filename}`;
    res.render('result', { imageUrl, upload: req.body});
})

// ----- 실습 해설 -----
// 일반 폼
app.post('/upload/practice', uploadPractice.single('profile'), (req, res) => {
    console.log(req.body);
    console.log(req.file);  // single에서 한 file이 나올것
    res.send('응답');
})
// 동적 폼
app.post('/upload/practice2', uploadPractice.single('profile'), (req, res) => {
    console.log(req.body);
    console.log(req.file);
    res.send('회원가입 완료');
})






app.listen(PORT, () => {
    console.log(`${PORT} port is opening!`);
})