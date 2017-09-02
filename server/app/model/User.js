const mongoose = require('mongoose')
const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required!'
const encryption = require('../utilities/encryption')
let userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true
    },
    salt: {
        type: String,
        required: REQUIRED_VALIDATION_MESSAGE,
        unique:true
    },
    hashedPassword: {
        type: String,
        required: REQUIRED_VALIDATION_MESSAGE
    },

    email:{
        type:String,
        required: REQUIRED_VALIDATION_MESSAGE,
        unique: true
    },
    firstName:{
        type:String,
        required:REQUIRED_VALIDATION_MESSAGE
    },
    lastName:{
        type:String,
        required:REQUIRED_VALIDATION_MESSAGE
    },
    flix:{
        type:[String],
        ref:'Flick'
    },
    series:{
        type:[String],
        ref:'Series'
    },
    likedFlix:{
        type:[String],
        ref:'Flick'
    },
    followedSeries:{
        type:[String],
        ref:'Series'
    },
    roles:{
        type:[String]
    }
})
let  User = mongoose.model('User',userSchema)
module.exports.seedAdminUser = ()=>{
    User.find({}).then(users =>{
        if(userSchema.length===0){
            let salt =encryption.generateSalt()
            let hashedPassword = encryption.generateHashedPassword(salt, 'eWlydGhqbzRtdzc5NTM2eTd2MzRudDg3d3lcZ0ZCV1QmdDR2OGhcbTg5MnU1bTM4djU4OTQyaiZUKiZAJF5VSlRnZnNk')
        User.create({
            username:'admin',
            firstName:'admin',
            lastName:'admin',
            salt:salt,
            email:'borisvasilev395@gmail.com',
            hashedPassword:hashedPassword,
            roles:['Admin']
        })
        }
    })
}