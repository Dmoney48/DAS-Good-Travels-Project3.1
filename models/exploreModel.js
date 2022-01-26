const mongoose = require('mongoose')
const { Schema, model } = mongoose

const exploreSchema = new Schema({
    name: {type: String, require: true},
    location: {type: String, default: true},
    img: {type: String, required: true},
    descritption: {type: String,default: 'Best vacation spot ever!!'},
    likes: {type: Number, default: 0},
    reviews: {type: String, required: true},
    tags: [{type: String}]
  })
  
  module.exports = model('Explore', mapSchema)