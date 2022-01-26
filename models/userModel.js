const mongoose = require('mongoose');
const { Scehma, model } = mongoose;


const userSchema = new Scehma({
    username: { type: String, required: true },
    password: { type: String, required: true },
    favMap: [{
        type: Schema.Types.ObjectId,
        ref: 'Travel',
    }]
})

module.exports = model('User', userSchema)