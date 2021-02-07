const express=require("express");
const router=express.Router();

//@route    GET api/story
//@desc     Route to the user's endpoint
//@access   Public
router.get("/",(req,res)=>res.send("Story Router"));

module.exports=router;