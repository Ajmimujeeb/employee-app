const mongoose=require('mongoose');
require('dotenv').config()
mongoose.connect(process.env.mongoDB_URL).then(()=>{      //connect with mongoose and mongodb
    console.log('connection established');
}).catch(()=>{
    console.log('Error in connection');
    
})                                                            