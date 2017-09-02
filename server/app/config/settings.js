const path = require('path')
let rootPath = path.normalize(path.join(__dirname,'/../../'))
module.exports={
    development:{
        rootPath:rootPath,
        db:'mongodb://localhost:27017/flixrev',
        port:3001
    },
    production:{
        rootPath:rootPath,
        port:process.env.PORT,
	    db:''
    }
}