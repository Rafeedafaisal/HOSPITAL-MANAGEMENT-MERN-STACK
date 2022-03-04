const express=require("express")
const userRouter=express.Router()
const signinADD=require("../Model/SigninData")
const signupADD=require("../Model/SignupData")
userRouter.post("/Signup",(req,res)=>{
  
    console.log("req body datas are"+req.body);
    let rq=JSON.stringify(req.body)
    console.log("stringified re body datas"+rq);
    console.log("req datas are"+req.body.username);
    const loginitems={
        username:req.body.username,
        password:req.body.password
    }
    const signinDATA=signinADD(loginitems)
    signinDATA.save().then(()=>{
    signinADD.findOne({username:loginitems.username}).then((details)=>{
        var id=details._id;
        
        const regitems={
    login_id:id,
    uname:req.body.uname,
    email:req.body.email,
    phone:req.body.phone,
    place:req.body.place,
    role:req.body.role
        }
        const signupDATA=signupADD(regitems)
        signupDATA.save().then((data)=>{
            console.log("datas are"+data);
            res.status(200).json({
                detail:data
            })
        })
    })
    })
})
module.exports=userRouter