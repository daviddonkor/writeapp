const express=require("express");
const router=express.Router();

//@route    GET api/poem
//@desc     Route to the user's endpoint
//@access   Public
router.get("/",(req,res)=>res.send("Poem Story Router"));

module.exports= router;