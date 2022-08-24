const mongoose = require('mongoose');
const {isEmail} = require('validator');
const bcrypt = require('bcrypt');
const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter an email.'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email.']
        
    },
    password: {
        type: String,
        required: [true, 'Please enter a password.'],
    },

})

// mongoose hooks
// runs before doc saved to db
userSchema.pre('save', async function (next) {
    let salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

// static methods
userSchema.statics.login = async function(email, password){
    const user = await User.findOne({email});
    if(user){
        // compare given password with hashed user password
        const passwordCorrect = await bcrypt.compare(password, user.password);
        if(passwordCorrect){
            // login the user
            return user;
        }else{
            // password was incorrect
            throw Error("Incorrect email and password combination, please try again.")
        }
    }else{
        // user does not exist
        throw Error("Incorrect email and password combination, please try again.")
    }


}


const User = mongoose.model('User', userSchema);
module.exports = User;