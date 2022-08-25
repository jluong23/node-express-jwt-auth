const jwt = require('jsonwebtoken');
const User = require('../models/User');

// middleware to protect GET routes, redirecting to login if JWT token is invalid or does not exist.
const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    if(token){
        // verify the token using our jwt app secret
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
            if(err){
                console.log(err.message);
                res.redirect('/login')
            }else{
                console.log(decodedToken);
                next();
            }
        })

    }else{
        res.redirect('/login');
    }
}

// similar to requireAuth, verifies a JWT token but assigns res.locals.user to the current user.
const checkUser = (req,res,next) => {
    const token = req.cookies.jwt;

    if(token){
        // verify the token using our jwt app secret
        jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
            if(err){
                console.log(err.message);
                res.locals.user = null;
                next();
            }else{
                let user = await User.findById(decodedToken.userId);
                
                res.locals.user = user;
                next();
            }
        })

    }else{
        res.locals.user = null;
        next();
    }
}

module.exports = {requireAuth, checkUser};