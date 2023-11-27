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
            console.log('ext >', ext);
            console.log('file name >', path.basename(file.originalname, ext));
            // path.basename(file.originalname, ext) => apple => 확장자를 제외한 파일 이름만
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
            // 저장된 파일명이 똑같을 때, 시간을 의미하는  Date.now() 붙여서 중복된 값을 없애주려고 하는것이다.
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
app.use('/upload', express.static(__dirname + '/upload'));    // 프론트에서 이 경로(첫번째 경로)로 들어오면은 여기로(두번째 경로) 보내라

app.get('/', (req, res) => {
    res.render('실습');
})

app.post('/upload', uploadDetail.single('userfile'), (req, res) => {
    console.log(req.file);
    console.log(req.body);
    res.send({file: req.file});
})
app.listen(PORT, () => {
    console.log(`${PORT} port is opening!`);
})