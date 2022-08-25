const User = require('../models/User');
const jwt = require('jsonwebtoken');
const handleSignUpErrors = (err) => {
    let errors = {
        "email" : "",
        "password": "",
    }

    // Duplicate / existing email error
    if(err.code == 11000){
        errors.email = "That email has already been taken!"
    }
    // validation errors upon sign up
    // err.errors.properties contains error messages for each path.
    // assign onto errors variable for returning to client
    if(err.message.includes('User validation failed:')){
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message;
        });
    }
    
    return errors;
}

const handleLoginErrors = (err) => {
    let errors = {
        "email" : "",
        "password": "",
    }

    if(err.message === "Incorrect email and password combination, please try again."){
        errors.password = err.message; //assign onto password error field only, don't want to show twice on client side
    }

    return errors;
}
const maxTokenAgeSeconds = 24*60*60 //JWT max token age in seconds
// creates a jwt token given a userid
const createToken = (userId) => {
    return jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: maxTokenAgeSeconds
    })
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
        const token = createToken(user._id);
        
        // set a jwt cookie on response.  
        res.cookie('jwt', token, {
            httpOnly: true, //Only transmitable by http
            maxAge: maxTokenAgeSeconds * 1000, // Max age is in ms, so *1000
            sameSite: "strict"
            
        })
        console.log(`User with email ${email} has been created`);
        res.status(201).json({user: user._id});

    }catch(err){
        //could not register, send feedback to client after handling errors
        const errors = handleSignUpErrors(err);
        res.status(400).json({errors});
    }
}

const login_post = async (req, res) => {
    const {email, password} = req.body;
    try{
        const user = await User.login(email, password);
        const token = createToken(user._id);
        // login successful
        // set a jwt cookie on response.  
        res.cookie('jwt', token, {
            httpOnly: true, //Only transmitable by http
            maxAge: maxTokenAgeSeconds * 1000, // Max age is in ms, so *1000
            sameSite: "strict"
            
        })
        console.log(`User with email ${email} has logged in`);
        res.status(201).json({user: user._id});
    }catch(err){
        // login unsuccessful, send feedback to client after handling errors
        const errors = handleLoginErrors(err);
        res.status(400).json({errors});
    }
}

const logout_get = (req, res) => {
    // set jwt cookie to empty string, expiring instantly
    res.cookie('jwt', '', {maxAge: 1 });
    res.redirect('/');
}

module.exports = {sign_up_get, login_get, sign_up_post, login_post, logout_get}