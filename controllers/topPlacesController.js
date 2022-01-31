const express = require('express')
const topplaces = express.Router()
const TopPlaces = require('../models/topPlacesModel')


// GET (index) destination list 
topplaces.get('/', (req, res) => {
    TopPlaces.find({}, (error, foundTopPlace) => {
        if(error) {
            res.status(400).json({ error: error.message })
        } else {
            res.status(200).json(foundTopPlace)
        }
    })
})



// PATCH -- incrementing likes
topplaces.patch('/addlikes/:id', (req, res) => {
    TopPlaces.findByIdAndUpdate(req.params.id, { $inc: {likes:1}}, {new:true}, (error, updatedTopPlaces) => {
        if(error) {
            res.status(400).json({error: error.message})
        } else {
            res.status(200).json({data: updatedTopPlaces})
        }
    })
})

module.exports = topplaces