const sign_up_get = (req, res) => {
    res.render('signup');
}

const login_get = (req, res) => {
    res.render('login');
}

const sign_up_post = (req, res) => {
    res.send('new signup');
}

const login_post = (req, res) => {
    res.send('user login');
}

module.exports = {sign_up_get, login_get, sign_up_post, login_post}