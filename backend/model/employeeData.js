const mongoose=require('mongoose');
//Creating the schema
const employeeSchema=mongoose.Schema({
    empID:{type:Number,required:true},
    empName:{type:String,required:true},
    empDesignation:{type:String,required:true},
    empDepartment:{type:String,required:true},
    empLocation:{type:String,required:true},
    empSalary:{type:Number,required:true},

})
const employeeData=mongoose.model('employee',employeeSchema);   // map to collection
module.exports=employeeData; // schema is exported