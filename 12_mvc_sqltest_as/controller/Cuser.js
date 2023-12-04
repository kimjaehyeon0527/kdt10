const User = require('../model/User');

exports.main = (req, res) => {
    res.render('index');        // 'index' ejs
}

exports.get_signup = (req, res) => {
    res.render('signup');       // 'signup' ejs
}

exports.get_signin = (req, res) => {
    res.render('signin');       // 'signin' ejs
}

// 회원가입 요청
exports.post_signup = (req, res) => {
    // 뷰(요청) -> 라우터 -> 컨트롤러 -> 모델 -> DB -> 모델 -> 컨트롤러 -> 뷰(응답)
    console.log('post_signup >', req.body);

    User.post_signup(req.body, (result) => {
        // result : rows 값
        res.send(result);
    })
}

// 로그인 요청
exports.post_signin = (req, res) => {
    console.log(req.body); // { userid: 'test', pw: '1234' }

    User.post_signin(req.body, (result) => {
        // result : rows [{}]
        if(result.length > 0) res.send({isLogin: true, userInfo: result[0]});
        else res.send({isLogin: false});
        
    }) 
    // res.send();
}

//  회원정보 수정 페이지 요청
exports.post_profile = (req, res) => {
    console.log(req.body); // {userid: ~}
    User.post_profile(req.body.userid, (result) => {
        // result : rows [{}]

        if(result.length > 0) res.render('profile', {data: result[0]})  // 'profile' ejs 렌더
    })
}

// 회원정보 수정 요청
exports.edit_profile = (req, res) => {
    console.log(req.body);
    User.edit_profile(req.body, () => {
        res.send('회원정보 수정 성공');
    })
}

// 회원 탈퇴 요청
exports.delete_profile = (req, res) => {
    console.log(req.body); // {id: ~}

    User.delete_profile(req.body.id, (result) => {
        res.send({deleteId: req.body.id});
    })
}