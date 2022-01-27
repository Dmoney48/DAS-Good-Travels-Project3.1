const express = require('express')
const travels = express.Router()
const Travel = require('../models/travelModel')


// GET (index) destination list 
travels.get('/', (req, res) => {
    Travel.find({}, (error, foundTravels) => {
        if(error) {
            res.status(400).json({ error: error.message })
        } else {
            res.status(200).json(foundTravels)
        }
    })
})

// DELETE delete a review  
reviews.delete('/:id', (req, res) => {
    Review.findByIdAndDelete(req.params.id, (error, deletedReview) => {
        if(error) {
            res.status(400).json({ error: error.message })
        } else if (deletedReview === null){
            res.status(404).json({ message: 'Review id not found' })
        } else {
            res.status(200).json({ message: `Review ${deletedReview.name} deleted successfully`})
        }
    })
})

// UPDATE (update) a map
travels.put('/:id', (req, res) => {
    Travel.findByIdAndUpdate(req.params.id, (error, updatedTravel) => {
        if(error) {
            res.status(400).json({ error: error.message })
        } else {
            res.status(200).json({ 
                message: `Travel ${updatedTravel.id} updated successfully`,
                data: updatedTravel 
            })
        }
    })
})

// POST (create) a destination
travels.post('/', (req, res) => {
    Travel.create(req.body, (error, createdTravel) => {
        if(error) {
            res.status(400).json({ error: error.message })
        } else {
            res.status(200).json(createdTravel)
        }
    })
})

// PATCH -- incrementing likes
travels.patch('/addlikes/:id', (req, res) => {
    Travel.findByIdAndUpdate(req.params.id, { $inc: {likes:1}}, {new:true}, (error, updatedTravel) => {
        if(error) {
            res.status(400).json({error: error.message})
        } else {
            res.status(200).json({data: updatedTravels})
        }
    })
})

module.exports = travels