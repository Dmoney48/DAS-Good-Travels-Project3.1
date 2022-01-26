const express = require('express')
const maps = express.Router()
const Map = require('../models/mapModel')


// GET (index) destination list 
maps.get('/', (req, res) => {
    Map.find({}, (error, foundMaps) => {
        if(error) {
            res.status(400).json({ error: error.message })
        } else {
            res.status(200).json(foundMaps)
        }
    })
})

// POST (create) a destination
maps.post('/', (req, res) => {
    Map.create(req.body, (error, createdMap) => {
        if(error) {
            res.status(400).json({ error: error.message })
        } else {
            res.status(200).json(createdMap)
        }
    })
})

// UPDATE (update) a map
maps.put('/:id', (req, res) => {
    Map.findByIdAndUpdate(req.params.id, (error, updatedMap) => {
        if(error) {
            res.status(400).json({ error: error.message })
        } else {
            res.status(200).json({ 
                message: `Map ${updatedMap.id} updated successfully`,
                data: updatedMap 
            })
        }
    })
})

// PATCH -- incrementing likes
maps.patch('/addlikes/:id', (req, res) => {
    Map.findByIdAndUpdate(req.params.id, { $inc: {likes:1}}, {new:true}, (error, updatedMap) => {
        if(error) {
            res.status(400).json({error: error.message})
        } else {
            res.status(200).json({data: updatedMaps})
        }
    })
})

module.exports = maps