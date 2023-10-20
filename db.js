const mongoose = require("mongoose")
require("dotenv").config();

module.exports = mongoose.connect(process.env.MONGODB_URL).then(()=>{
   console.log("Successfully connected")
}).catch(error=>
    {console.log(error)
        console.log('not connected')
    }
    )
