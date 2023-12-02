exports.main = (req, res) => {
    // index.ejs
    res.render('index');
}

exports.sign = (req, res) => {
    res.render('signup');
}
