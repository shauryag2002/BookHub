const mongoose=require("mongoose")
const bookSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        require:true
    }
})
module.exports=new mongoose.model("Book",bookSchema)