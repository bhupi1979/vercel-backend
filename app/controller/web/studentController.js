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
   let ss=await studentTable.updateOne({_id:id},obj)
   try {
        if(ss.modifiedCount===0)
            return res.send({msg:"no record updated"})
        res.send({status:1,msg:"data updated successfuly",data:ss})
    
   } catch (error) {
    res.send({status:0,msg:"ther is error in update",err:error})
   }
}
module.exports={studentinsert,studentview,studentdelete,studentupdate}