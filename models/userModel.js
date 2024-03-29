const mongoose = require('mongoose');
const { Schema, model } = mongoose;


const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    favTravel: [{
        type: Schema.Types.ObjectId,
        ref: 'Travel',
    }]
})

module.exports = model('User', userSchema)