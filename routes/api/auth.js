const express=require("express");
const router=express.Router();
const {check,validationResult}=require('express-validator');
const jwt=require("jsonwebtoken");
const config=require("config");
const auth = require('../../middleware/auth');
const User=require("../../models/User");
const bcrypt=require("bcryptjs");
//@route    GET api/auth
//@desc     Route to the user's endpoint
//@access   Public
router.get("/",auth, async (req,res) => {
    try {
        const user=await User.findById(req.user.id).select("-password");
        res.json(user);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});


router.post("/",[
    check("email","Please use a valid email").isEmail(),
    check("password","Password is required!").exists()
],
    
async (req,res)=>{
    const errors=validationResult(req);
    console.log(req.body);
    if(!errors.isEmpty()){
       
        return res.status(400).json({errors:errors.array()}) ;
    }
    
    const {email,password }=req.body;
    try {
        let user= await User.findOne({email});
        if(!user){
            //console.error("User exitss");
           return res.status(400).json({errors:[{msg:"Invalid Username or Password!"}]})
        }

    const isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.status(400)
        .json({errors:[{msg:"Invalid Username or Password!"}]});
    }
    const payload={
        user:{
            id:user.id
        }
    }

    jwt.sign(
        payload,
        config.get("jwtSecret"),
        {expiresIn:360000},
        (err,token)=>{
            if(err) throw err;
            res.json({token});
        });

         //return res.send("User Registered Successfully")
    } catch (error) {
        console.error(error.message);
       return res.status(500).send("Server Error");
    }
    //console.log(req.body);
    
});


module.exports= router;