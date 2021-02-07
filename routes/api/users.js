const express=require("express");
const router=express.Router();
const {check,validationResult}=require('express-validator');
const gravatar =require("gravatar");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const config=require("config");
const User =require("../../models/User");
//@route    POST api/Users
//@desc     Register New User
//@access   Public
router.post("/",[
    check('name',"Name is required"),
    check("email","Please use a valid email").isEmail(),
    check("password","Password length must be greater than 7.").isLength({min:7})
],
    
async (req,res)=>{
    const errors=validationResult(req);
    
    if(!errors.isEmpty()){
       
        return res.status(400).json({errors:errors.array()}) ;
    }
    
    const {name,email,password }=req.body;
    try {
        let user= await User.findOne({email});
        if(user){
            //console.error("User exitss");
           return res.status(400).json({errors:[{msg:"User already exists!"}]})
        }

        //get Gravatar
        const avatar=gravatar.url(email,
            {s:"200",
            r:"pg",
            d:"mm"
        });
         const salt=await bcrypt.genSalt(10);
         user=new User({
             name,
             email,
             avatar,
             password
         });
         user.password=await bcrypt.hash(password,salt);
         //console.log(user);
         
         await user.save();
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