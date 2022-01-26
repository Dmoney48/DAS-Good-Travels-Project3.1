const express = require('express')
const reviews = express.Router()
const Review = require('../models/reviewModel')

// POST (create) a review
reviews.post('/', (req, res) => {
    Review.create(req.body, (error, createdReview) => {
        if(error) {
            res.status(400).json({ error: error.message })
        } else {
            res.status(200).json(createdReview)
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

// UPDATE (update) a review
reviews.put('/:id', (req, res) => {
    Review.findByIdAndUpdate(req.params.id, (error, updatedReview) => {
        if(error) {
            res.status(400).json({ error: error.message })
        } else {
            res.status(200).json({ 
                message: `Review ${updatedReview.id} updated successfully`,
                data: updatedReview 
            })
        }
    })
})

module.exports = reviews