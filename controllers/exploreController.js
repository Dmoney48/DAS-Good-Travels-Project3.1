const express = require('express')
const explorer = express.Router()
const Explore = require('../models/exploreModel')


// GET (index) destination list 
explorer.get('/', (req, res) => {
    Explore.find({}, (error, foundExplore) => {
        if(error) {
            res.status(400).json({ error: error.message })
        } else {
            res.status(200).json(foundExplore)
        }
    })
})

// PATCH -- incrementing likes
explorer.patch('/addlikes/:id', (req, res) => {
    Explore.findByIdAndUpdate(req.params.id, { $inc: {likes:1}}, {new:true}, (error, updatedExplore) => {
        if(error) {
            res.status(400).json({error: error.message})
        } else {
            res.status(200).json({data: updatedExplore})
        }
    })
})

module.exports = explorer