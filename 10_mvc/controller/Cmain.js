// [After] Model 연결 후
const Comment = require('../model/Comment');

// [Before] Model 연결 전
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

// GET /
exports.main = (req, res) => {
    res.render('index');
};

// GET / comments
exports.comments = (req, res) => {
    console.log(Comment.commentInfos());  // [{}, {}, {}, {}]
    res.render('comments', {commentsInfos: Comment.commentInfos()})   // commentsInfos라는 (키값) 이름으로 프론트에게 넘겨줌. (객체 형태로 담아서 보냄)
}

// GET / comment/:id
exports.comment =(req, res) => {
    // req. query: /comment?id=1 전엔 이렇게 받았었다.
    console.log(req.params); // {id: '1'} : 라우트 매개변수에 대한 정보가 담겨 있음
    console.log('id >', req.params.id);

    const comments = Comment.commentInfos(); // ( model 연결 후 추가 )변수 생성
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
}