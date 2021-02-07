const mongoose=require("mongoose");
const ProfileSchema= new mongoose.Schema({
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    country:{
        type: String,
        required:true
    },
    dateofbirth:{
        type: Date,
        required: true
    },
    gender:{
        type: String,
        required:true
    },
    defaultlanguage:{
        type: String,
        required: true
    },
    bio:{
        type: String,
    },
    educationallevel:{
        type: String,
        required:true
    },
    interests:{
        type: [String]
    },
    education:{
        school:{
            type: String,
            required:true
        },
        startyear:{
            type: String
        },
        iscurrent:{
            type: String
        },
        endyear:{
            type: String
        },
        country:{
            type: String
        },
        coursestudies:{
            type:String,
            required:true
        }
    },
    socialmedia:{
        facebook:{
            type: String
        },
        twitter:{
            type: String
        },
        instagram:{
            type: String
        }
    },
    followers:{
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref: 'user'
        },
        date:{
            type: Date,
            default: Date.now
        }
    },
    website:{
        type:String
    },
    date:{
        type: Date,
        default: Date.now
    },
    status:{
        type:String,
        required:true
    }
});

module.exports=Profile=mongoose.model("profile",ProfileSchema)