const express=require("express");
const router=express.Router();

//@route    GET api/videostory
//@desc     Route to the user's endpoint
//@access   Public
router.get("/",(req,res)=>res.send("Video Story Router"));

module.exports= router;