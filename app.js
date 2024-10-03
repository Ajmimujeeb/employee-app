const express=require('express');
const morgan=require('morgan');
const app=new express();
app.use(morgan('dev'));
const eroutes=require('./routes/employeeroutes');
app.use('/employees',eroutes);
require('dotenv').config();
const PORT=process.env.PORT
require('./db/connection');
app.set('view engine','ejs');//is require the ejs
app.set('views',__dirname+'/views'); // path of access views-keyword
app.use(express.static('public'))









app.listen(PORT,()=>{
    console.log(`server running on PORT ${PORT}`);
    
})