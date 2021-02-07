const express=require("express");
const router=express.Router();
const auth=require("../../middleware/auth");
const Profile=require("../../models/Profile");
const User=require('../../models/User');
const {check,resultValidator, validationResult}=require("express-validator");
//@route    GET api/profile/me
//@desc     Get Current User Profile
//@access   Private

 
router.get("/me",auth, async(req,res)=>{
    try {
        const profile=await Profile.findOne({user:req.user.id}).populate('user',['name','avatar']);
        if(!profile){
            return res.status(400).json({msg:"There is no profile for this user"});
        }
        res.json(profile);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

//@route    POST api/profile
//@desc     Create and update a profile
//@access   Private

router.post("/",[auth,[
    check("status","Status is required").not().isEmpty(),
    check("country","Country is required").not().isEmpty(),
    check("dateofbirth","Date of Birth is required").not().isEmpty(),
    check("dateofbirth","Date of Birth is required").isDate(),
    check("gender","Gender is required!").not().isEmpty(),
    check("defaultlanguage","Default Language is required!").not().isEmpty(),
    check("educationallevel","Educational Level is required!").not().isEmpty(),

]],async(req,res)=>{
    const error=validationResult(req);
    if(!error.isEmpty()){
        return res.status(401).json({error:error.array()})
    }
    
    const [status,
        country,
        dateofbirth,
        gender,
        defaultlanguage,
        educationallevel,
        website
    ,bio,
    interests]=req.body;
    // Build profile object
    profileFields={};
    profileFields.user=req.user.id;
    if(country) profileFields.country=country;
    if(status) profileFields.status=status;
    if(dateofbirth) profileFields.dateofbirth=dateofbirth;
    if(gender) profileFields.gender=gender;
    if(defaultlanguage) profileFields.defaultlanguage=defaultlanguage;
    if(educationallevel) profileFields.educationallevel=educationallevel;
    if(website) profileFields.website=website;
    if(bio) profileFields.bio=bio;
    if(interests) 
    {
        profileFields.interests=interests.split(",").map(interest=>interest.trim());
    }
    profileFields.socialmedia={};
   // if(face) profileFields.country=country

    });


module.exports= router;