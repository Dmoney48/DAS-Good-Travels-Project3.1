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
travels.delete('/:id', (req, res) => {
    Travel.findByIdAndDelete(req.params.id, (error, deletedTravel) => {
        if(error) {
            res.status(400).json({ error: error.message })
        } else if (deletedTravel === null){
            res.status(404).json({ message: 'Travel id not found' })
        } else {
            res.status(200).json({ message: `Travel ${deletedTravel.name} deleted successfully`})
        }
    })
})

travels.delete('/:id', (req, res) => {
    Travel.findByIdAndDelete(req.params.id, (error, deletedTravel) => {
        if(error){
            res.status(400).json({ error: error.message})
        } else if (deletedTravel === null) {
            res.status(404).json({ message: 'Travel id not Found'})
        } else {
            res.status(200).json({ message : `Travel ${deletedTravel.name} deleted Successfully`})
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
    console.log(req.body)
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
            res.status(200).json({data: updatedTravel})
        }
    })
})

module.exports = travels
