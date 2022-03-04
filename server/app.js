const express=require("express")
const app=express();
const cors=require("cors")
app.use(cors())
app.use(express.urlencoded({extended:true}))
const mongoose=require("mongoose")
const userRouter=require("./src/Controller/userRouter")
app.use("/",userRouter)
mongoose.connect("mongodb+srv://Rafeeda:Rafee%40123@cluster1.naasj.mongodb.net/fullstackDatabase?retryWrites=true&w=majority",()=>{
    console.log("Data base connected..");
})
app.listen(9090,()=>{
    console.log("http://localhost:9090");
})