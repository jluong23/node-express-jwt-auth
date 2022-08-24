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
// runs after doc is saved to db
userSchema.post('save', (doc, next) => {
    console.log(`User with email ${doc.email} has been saved.`);
    next();
})

// runs before doc saved to db
userSchema.pre('save', async function (next) {
    let salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})


const User = mongoose.model('User', userSchema);
module.exports = User;