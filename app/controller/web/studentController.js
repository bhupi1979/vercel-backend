const studentTable = require("../../Model/Web/student.Model")

//data insert
let studentinsert= async(req,res)=>{
    let{name,email,phone}=req.body
    let ss= new studentTable({
        name,
        email,
        phone
    })
    await ss.save().then(()=>{
        res.send({status:1,msg:"datasave successfully"})
    }).catch((err)=>{
        res.send({status:0,msg:"data did not save ",Error:err})
    })
}
//data insert ends here
//data view
let studentview= async(req,res)=>{
   let ss= await studentTable.find()
   if(ss!=null||ss!=""||ss!=undefined||ss!={})
   {
    res.send({status:1,data:ss})
   }
   else{
    res.send({status:0,msg:"there is no data to display"})
   }
}
//data viw ends here
//data delete
let studentdelete= async(req,res)=>{
    let{id}=req.params 
 let ss= await studentTable.deleteOne({_id:id})
 res.send({status:1,msg:"data deleted succesfully",data:ss})
}
//data deleted ends here
//data update starts here
let studentupdate=async(req,res)=>{
   let{id}=req.params
   let {name,email,phone}=req.body
   let obj={}
   if(name!=null)obj.name=name
   if(email!=null)obj.email=email
   if(phone!=null)obj.phone=phone
   console.log(phone.length)
   if(phone.length>10)
    return res.send({msg:"phone number cannot be greate than 10"})
if(phone.length<10)
    return res.send({msg:"phone number cannot be less than 10"})
   await studentTable.updateOne({_id:id},obj).then(()=>{
 res.send({status:1,msg:"data updated successfully"})
   }).catch((err)=>{
 res.send({status:0,msg:"data did not save there is some error ",Error:err})
   })
//    try {
//        if(!ss)res.send({status:0,msg:"ther is internal erorr or validation error"})
//         if(ss.modifiedCount===0)
//             return res.send({msg:"no record updated"})
//         res.send({status:1,msg:"data updated successfuly",data:ss})
    
//    } catch (error) {
//      console.error('Update error:', error);

//  if (error.name === 'MongoServerError') {
//       if (error.code === 11000) {
//         // Duplicate key (e.g. email already exists)
//         return res.status(409).json({
//           status: 0,
//           message: 'Duplicate value error',
//           field: Object.keys(error.keyPattern)[0],
//         });
//       }

// if (error.name === 'ValidationError') {
//       return res.status(400).json({
//         status: 0,
//         message: 'Validation failed',
//         error: error.message,
//       });
//     }      res.status(500).json({
//       message: 'Internal Server Error',
//       error: error.message, // Optional: only in dev
//     })
//    // res.send({status:0,msg:"ther is error in update",err:error})
//  }}
}
// find student data by id
let studentdatabyid=async(req,res)=>{
    let id=req.params.id
let ss= await studentTable.findById(id)
   if(ss!=null||ss!=""||ss!=undefined||ss!={})
   {
    res.send({status:1,data:ss})
   }
   else{
    res.send({status:0,msg:"there is no data to display"})
   }
}
module.exports={studentinsert,studentview,studentdelete,studentupdate,studentdatabyid}