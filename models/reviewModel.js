const mongoose = require('mongoose')
const { Schema, model } = mongoose

const reviewSchema = new Schema({
    reviews: {type: String, required: true},
    tags: [{type: String}]
  })
  
  module.exports = model('Review', reviewSchema)
  