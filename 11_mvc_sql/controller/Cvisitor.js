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
    Visitor.getVisitors((result) => {
        console.log('Cvisitor.js >', result);
        res.render('visitor', { data: result })
    })
}

// POST /visitor
exports.post_visitor = (req, res) => {
    console.log(req.body);
    const {name, comment} = req.body;
    Visitor.postVisitor(req.body, (result) => {
        console.log(result);
        res.send( {id : result, name, comment});
    })
}

// 프론트에서 요청이 들어오면 모델을 호출하고 모델에서 디비랑 통신을 한담에 응답이 되면 다시 컨트롤러로 돌아와서 프론트에다가 응답을 보내주는것.