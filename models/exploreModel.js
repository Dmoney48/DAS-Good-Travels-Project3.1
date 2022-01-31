const mongoose = require('mongoose')
const { Schema, model } = mongoose

const exploreSchema = new Schema({
    name: {type: String, require: true},
    location: {type: String, default: true},
    img: {type: String, required: true},
    description: {type: String,default: 'Best vacation spot ever!!'},
    likes: {type: Number, default: 0},
    reviews: {type: String, required: false},
    tags: [{type: String}]
  })
  
  module.exports = model('Explore', exploreSchema)