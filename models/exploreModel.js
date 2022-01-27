const mongoose = require('mongoose')
const { Schema, model } = mongoose

const exploreSchema = new Schema({
    name: {type: String, required: true},
    location: {type: String, required: false},
    img: {type: String, required: false},
    descritption: {type: String,default: 'Best vacation spot ever!!'},
    likes: {type: Number, default: 0},
    reviews: {type: String, required: false},
    tags: [{type: String}]
  })
  
  module.exports = model('Explore', exploreSchema)