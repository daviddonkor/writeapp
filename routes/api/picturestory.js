const express=require("express");
const router=express.Router();

//@route    GET api/picturestory
//@desc     Route to the user's endpoint
//@access   Public
router.get("/",(req,res)=>res.send("Picture Story Router"));

module.exports= router;