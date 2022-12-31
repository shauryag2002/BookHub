const express=require("express")
const cors=require('cors')
const dotenv=require( "dotenv");
const mongoose=require("mongoose")
const Book=require("./models/model");
const router = require("./routes/books_route");
const app=express();
app.use(express.json())
app.use(cors())
dotenv.config({
    path:"./config.env"
})
mongoose.connect("mongodb+srv://shaurya:shaurya@cluster0.5e4fkya.mongodb.net/?retryWrites=true&w=majority")
app.use("/book",router)
app.get("/",async(req,res)=>{
    res.send("app is running")
})
app.listen(5000,function(){
    console.log("server started at http://localhost:5000")
})