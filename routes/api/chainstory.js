const express=require("express");
const router=express.Router();

//@route    GET api/chainstory
//@desc     Route to the user's endpoint
//@access   Public
router.get("/",(req,res)=>res.send("Chain Story Router"));

module.exports= router;