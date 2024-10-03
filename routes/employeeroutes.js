const express=require('express')
const router=express.Router();
const employeeModel=require('../model/employeeData');
router.use(express.json());//post
router.use(express.urlencoded({extended:true}));
//get operation
router.get('/',async (req,res)=>{
    try{
     const data=await employeeModel.find();
     res.status(200).send(data);
    }catch (error){
       res.status(404).send('Data not found');
    }
})
//post operation
router.post('/add',async(req,res)=>{
    try {
        var item=req.body;
        const data1=new employeeModel(item);
        const saveddata=await data1.save();
        res.status(200).send('post sucessfull');
    } catch (error) {
        res.status(404).send('post unsucessfull');
    }
    
})
//Update Operation
router.put('/edit/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const data=await employeeModel.findByIdAndUpdate(id,req.body)
        res.status(200).send('Update succesful')
    } catch (error){
        res.status(404).send('Update unsuccesful')
    }
})
//delete operation
router.delete('/remove/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const data=await employeeModel.findByIdAndDelete(id)
        res.status(200).send('delete succesful')
    } catch (error) {
        res.status(404).send('delete unsuccesful')
    }
})











module.exports=router
