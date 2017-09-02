const mongoose = require('mongoose')
const shortid = require('shortid')
const REQUIRED_VALIDATION_MESSAGE= '{PATH} is required!'
let reviewSchema = new mongoose.Schema({
    creationDate:{
        type:Date,
        'default':new Date()
    },
    creator:{
        type:String,
        ref:'User',
        required:REQUIRED_VALIDATION_MESSAGE
    },
    rating:{
        type:Number,
        required:REQUIRED_VALIDATION_MESSAGE
    },
    title:{
        type:String,
        required:REQUIRED_VALIDATION_MESSAGE
    },
    description:{
        type:String,
        required:REQUIRED_VALIDATION_MESSAGE
    },
    reviewType:{
        type:String,
        required:REQUIRED_VALIDATION_MESSAGE
    }
})
let Review = mongoose.model('Review',reviewSchema)