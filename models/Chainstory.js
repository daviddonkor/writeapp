const mongoose=require("mongoose");

const ChainStorySchema=new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    title:{
        type:String
    },
    stories:{
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user"
        },
        story:{
            type: String,
            required:true
        },
        date:{
            type: Date,
            default: Date.now
        }
       
    },
    lastupdate:{
        type:Date,
        default: Date.now
    },
    ratings:{
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"user"
        },
        rate:{
            type: Integer
        }
    },
    comments:{
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"user"
        },
        comment:{
            type: String
        }
    },
    likes:{
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"user"
        },
        like:{
            type: Integer
        }
    },
    features:{
        plot:{
            type: String
        },
        theme:{
            type: String
        },
        characters:{
            type:[String]
        },
        devices:{
            type:[String]
        },
        coauthors:{
            type:[String]
        }
    },
    sharecount:{
        type: Integer
    }
})

module.exports=ChainStory=mongoose.model('chainstory',ChainStorySchema);