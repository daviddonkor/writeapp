const express=require("express");
const router=express.Router();

//@route    GET api/Comment
//@desc     Route to the user's endpoint
//@access   Public
router.get("/",(req,res)=>res.send("Comment Router"));

module.exports= router;