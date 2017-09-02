const mongoose = require('mongoose')
const REQUIERED_VALIDATION_MESSAGE = '{PATH} is required'
const shortid = require('shortid')
let flickSchema = new mongoose.Schema({
    _id:{
        type:String,
        'default': shortid.generate
    },
    title:{
        type:String,
        required:REQUIERED_VALIDATION_MESSAGE
    },
    description:{
        type:String
    },
    rating:{
        type:Number
    },
    raters:{
        type:Number,
        'default':0
    },
    series:{
        type:[String]
    },
    participants:{
        type:[String],
        ref:'User'
    },
    category:{
        type:[String]
    },
    uploadDate:{
        type:Date,
        'default': new Date()
    }
})
let Flick = mongoose.model('Flick',flickSchema)