const mongoose=require("mongoose");

const FilmStorySchema=new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    title:{
        type:String,
        required:true
    },
    path:{
        type: String,
        required:true
    },
    date:{
        type: Date,
        default: Date.now
    },
    lastupdate:{
        type:Date
    },
    type:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
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
        
        tools:{
            type: [String]
        },
        pallette:{
            type:String
        },
        coauthors:{
            type:[String]
        }
    }
});

module.exports=Poem=mongoose.model("poem",PoemSchema);