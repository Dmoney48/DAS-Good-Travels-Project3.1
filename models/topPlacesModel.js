const mongoose = require('mongoose')
const { Schema, model } = mongoose

const topPlacesSchema = new Schema({
    name: {type: String, required: true},
    location: {type: String, required: false},
    img: {type: String, required: false},
    description: {type: String,default: 'Best vacation spot ever!!'},
    likes: {type: Number, default: 0},
    reviews: {type: String, required: false},
    tags: [{type: String}]
  })
  
  const TopPlaces = model('TopPlaces', topPlacesSchema)
  module.exports = TopPlaces 