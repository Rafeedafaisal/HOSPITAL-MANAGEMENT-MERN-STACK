const mongoose=require("mongoose")
const signinSchema= new mongoose.Schema({
    username:String,
    password:String,
    role:String
})
const signinDB=mongoose.model("signinData",signinSchema)
module.exports=signinDB