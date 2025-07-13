let mngs=require('mongoose')
require('dotenv').config()
const dbconnect=()=>{
mngs.connect(process.env.URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
console.log("database connected successfuly")
})
}
module.exports=dbconnect