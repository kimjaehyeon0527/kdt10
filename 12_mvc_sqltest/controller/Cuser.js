const User = require('../model/User');

exports.main = (req, res) => {
    // index.ejs
    res.render('index');
}

exports.signup = (req, res) => {
    res.render('signup');
}

exports.Register_signup = (req, res) => {
    console.log(req.body);
    const { id, password, name } = req.body;

    User.postMember(req.body, (result) => {
        console.log(result);
        res.send({ id, password, name});
    })
}

exports.signin = (req, res) => {
    res.render('signin');
}
