const mongoose=require("mongoose");

const StorySchema=new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    title:{
        type:String
    },
    story:{
        type: String,
    },
    date:{
        type: Date,
        default: Date.now
    },
    lastupdate:{
        type:Date
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
    }
})

module.exports=Story=mongoose.model('story',StorySchema);