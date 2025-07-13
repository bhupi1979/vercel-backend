let mngs=require('mongoose')
let StudentModel=mngs.Schema({
    name:{
        type:String,
        required:true,
     },
     email:{
        type:String,
        required:true,
        unique:true
     },
     phone:{
        type:Number,
        required:true,
        unique:true,
        max:9999999999,
        min:100000000
     }
})
let studentTable=mngs.model("table",StudentModel)
module.exports=studentTable