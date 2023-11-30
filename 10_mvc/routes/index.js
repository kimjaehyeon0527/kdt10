const express = require('express');
const router = express.Router();
// controller 파일 가져오기
const controller = require('../controller/Cmain')

// index.js => localhost:PORT/
// (임시) DB로부터 받아온 데이터 - 댓글 목록
const comments = [
    {
        id : 1,
        userid : 'helloworld',
        date : '2022-10-31',
        comment: '안녕하세요~'
    },
    {
        id : 2,
        userid : 'hello',
        date : '2022-11-31',
        comment: '반가워요~'
    },
    {
        id : 3,
        userid : 'apple',
        date : '2023-10-31',
        comment: '오 신기하다~'
    },
    {
        id : 4,
        userid : 'anything',
        date : '2024-04-31',
        comment: '댓글 적기'
    },

]

// [Before] MVC 적용 전에는 app.js에서 라우트 정의
// 단점: 라우터(경로)가 많아진다면? app.js 코드가 길어짐 -> 유지보수성 하락

/*
// GET /
router.get('/', (req, res) => {
    res.render('index');
})

// GET / comments
router.get('/comments', (req, res) => {
    console.log(comments);  // [{}, {}, {}, {}]
    res.render('comments', {commentsInfos: comments})   // commentsInfos라는 (키값) 이름으로 프론트에게 넘겨줌. (객체 형태로 담아서 보냄)
})

// GET / comment / :id -- 실제 들어오는 값을 명시 해준다.
router.get('/comment/:id', (req, res) => {
    // req. query: /comment?id=1 전엔 이렇게 받았었다.
    console.log(req.params); // {id: '1'} : 라우트 매개변수에 대한 정보가 담겨 있음
    console.log('id >', req.params.id);

    const commentId = req.params.id;        // 댓글 id: url로 들어온 매개변수

    console.log(comments[commentId - 1])

    // 존재하지 않는 댓글 id 접속시 404 페이지
    if(commentId < 1 || commentId > comments.length) {
        return res.render('404');
    }

    console.log(typeof commentId);  // string

    // : id 변수에 숫자가 아닌 값이 온다면 404 페이지
    if(isNaN(commentId)) {
        return res.render('404');
    }

    res.render('comment', {commentInfo: comments[commentId - 1]});
})
*/

// Controller와 연결
// 경로를 컨트롤러와 연결지어 사용이 가능.
router.get('/', controller.main);
router.get('/comments', controller.comments);
router.get('/comment/:id', controller.comment);

// module.exports를 통해서 router를 등록을 해줘야 다른 모듈에서 사용이 가능하다.
module.exports = router;
