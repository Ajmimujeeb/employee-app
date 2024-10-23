const express=require('express');
const morgan=require('morgan');
const cors=require('cors')
const app=new express();
app.use(morgan('dev'));
app.use(cors())
const eroutes=require('./routes/employeeroutes');
const user_route=require('./routes/user')
app.use('/employees',eroutes);
app.use("/user",user_route)
require('dotenv').config();
const PORT=process.env.PORT
require('./db/connection');









app.listen(PORT,()=>{
    console.log(`server running on PORT ${PORT}`);
    
})