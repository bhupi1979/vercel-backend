const exp=require("express")
const { studentinsert, studentview, studentupdate, studentdelete, studentdatabyid } = require("../../controller/web/studentController")
const studentroute=exp.Router()
studentroute.post("/student-insert",studentinsert)
studentroute.get("/student-view",studentview)
studentroute.put("/student-update/:id",studentupdate)
studentroute.delete("/student-delete/:id",studentdelete)
studentroute.get("/studentbyid/:id",studentdatabyid)
module.exports=studentroute