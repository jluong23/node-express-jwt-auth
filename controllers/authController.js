const User = require('../models/User');

const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = {
        "email" : "",
        "password": "",
    }

    // duplicate email error
    if(err.code == 11000){
        errors.email = "That email has already been taken!"
    }
    // validation errors 
    if(err.message.includes('User validation failed:')){
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message;
        });
    }
    return errors;
}

const sign_up_get = (req, res) => {
    res.render('signup');
}

const login_get = (req, res) => {
    res.render('login');
}

const sign_up_post = async (req, res) => {
    const {email, password} = req.body;
    try{
        const user = await User.create({email, password});
        res.status(201).json(user);
    }catch(err){
        res.status(400).json(handleErrors(err));
    }
}

const login_post = async (req, res) => {
    res.send('user login');
}

module.exports = {sign_up_get, login_get, sign_up_post, login_post}