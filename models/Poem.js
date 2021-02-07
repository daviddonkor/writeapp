const mongoose=require("mongoose");

const PoemSchema=new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    title:{
        type:String,
        required:true
    },
    stanzas:{
        type: [String],
        required:true
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
    type:{
         type: String,
         required: true
    },
    features:{
       
        rhyme:{
            type: String
        },
        meter:{
            type:String
        },
        devices:{
            type:[String]
        },
        coauthors:{
            type:[String]
        }
    }
});

module.exports=Poem=mongoose.model("poem",PoemSchema);