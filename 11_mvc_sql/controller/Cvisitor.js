const Visitor = require('../model/visitor');

// GET /
exports.main = (req, res) => {
    res.render('index');    
}

// GET /visitor
exports.getVisitors = (req, res) => {
    // // [Before]
    // console.log(Visitor.getVisitors()); // [ {}, {} ]
    // res.render('visitor', { data: Visitor.getVisitors()}) // visitor.ejs

    // [After]
    // 컨트롤러 -> 모델 -> DB -> 모델 -> 컨트롤러 -> 응답(프론트에)
    // 콜백함수를 써준 이유 -> 비동기 처리를 하기위해서
    // 
    // 1) Visitor.getVisitors() // 함수 호출 (모델에 있는 함수를 호출)
    // 2) 모델에서 데이터값 받은 후에 콜백 함수 실행
    Visitor.getVisitors((result) => {
        // 모델에 rows를 result라는 변수명으로 받음.
        console.log('Cvisitor.js >', result);
        res.render('visitor', { data: result })
    })
}

// POST /visitor
exports.post_visitor = (req, res) => {
    console.log(req.body);
    const {name, comment} = req.body;
    // Post, Get 요청시에 컨트롤러에서 모델에 필요한 값을 넘겨줘야 함.
    // Visitor.postVisitor( view에서 받아온 데이터, 콜백 함수) 호출
    Visitor.postVisitor(req.body, (result) => {
        // result: rows.insertId => ex) 3
        console.log(result);
        res.send( {id : result, name, comment});
    })
}

// 프론트에서 요청이 들어오면 모델을 호출하고 모델에서 디비랑 통신을 한담에 응답이 되면 다시 컨트롤러로 돌아와서 프론트에다가 응답을 보내주는것.