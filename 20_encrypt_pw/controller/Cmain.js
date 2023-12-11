const models = require('../models/index');
const User = models.user;

exports.main = (req, res) => {
    res.render('register');
}

exports.login = (req, res) => {
    res.send('');
}

exports.post_user = (req, res) => {
    const {userid, pw, name} = req.body;
    User.create({
        id: userid,
        pw: pw,
        name: name
    }).then((result) => {
        console.log('create >', result);
        res.send(result);
    })
}