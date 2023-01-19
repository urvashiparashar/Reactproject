const dotenv=require("dotenv");
const mongoose=require("mongoose");
const express=require("express");
const app=express();
// const cors = require ("cors");


dotenv.config({path:'./config.env'});
require('./db/conn');
// app.use(cors());

app.use(express.json());

app.use(require('./router/auth'));

// const User=require('./models/userSchema');

// const DB='mongodb+srv://mernyoutube:mernyoutube@cluster0.nnzrhzy.mongodb.net/?retryWrites=true&w=majority';


const PORT=process.env.PORT||5000;


//Middleware
const middleware=(req,res,next)=> {
   console.log("hello my middleware");
   next();
}

// middleware();

app.get("/",(req,res)=>
{
    res.send("hello world from server");
});
// app.get("/register",(req,res)=>
// {
//     res.send("hello register world from server");
// });
app.get("/signin",(req,res)=>
{
    res.send("hello signin world from server");
});
if(process.env.NODE_ENV=="production")
{
    app.use(express.static("client/build"));
}
app.get("/login",(req,res)=>
{
    res.send("hello login world from server");
});
app.get("/about",middleware, (req,res)=>
{
    console.log("hello my about");
    res.send("hello about world from server");
});
app.get("/contact",(req,res)=>
{   
    // res.cookie("test","thapa");
    res.send("hello contact world from server");
});
app.listen(PORT,()=>
{
    console.log(`server is running at port no ${PORT}`);
})