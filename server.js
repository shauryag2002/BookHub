if (process.env.NODE_ENV!=='production') {
    require("dotenv").parse();
}
const express=require("express")
const app=express();
const indexRouter=require("./routes/index")
app.set("view engine","ejs")
app.use(express.static("public"))
const mongoose=require("mongoose")
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true})
const db=mongoose.connection;
db.on("error",(err)=>{console.error(err);})
db.once("open",function () {
    console.log("connected to mongoose")
})
const port=process.env.PORT || 3000;
app.use("/",indexRouter)



app.listen(port,function () {
    console.log("server started on http://localhost:"+port)
})