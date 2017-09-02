const mongoose = require('mongoose')
const shortid = require('shortid')
const REQUIRED_VALIDATION_MESSAGE= '{PATH} is required!'
let seriesSchema = new mongoose.Schema({
    _id:{
        type:String,
        'default':shortid.generate()
    },
    title:{
        type:String,
        required:REQUIRED_VALIDATION_MESSAGE
    },
    flix:{
        type:[String],
        ref:'Flick'
    },
    category:{
        type:[String]
    },
    participants:{
        type:[String],
        ref:'User'
    }
})
let Series = mongoose.model('Series',seriesSchema)