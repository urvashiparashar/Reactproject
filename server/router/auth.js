const express=require('express');
const router=express.Router();
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const authenticate=require('../middleware/authenticate');
const cookieParser = require("cookie-parser");
router.use(cookieParser());

require('../db/conn');
const User=require('../models/userSchema');

router.get("/",(req,res)=>
{
    res.send("hello world from server router");
});

//using promises
// router.post('/register',async (req,res)=>
// {
//     // console.log(req.body);
//     // res.json({message: req.body});
//     // // res.send("mera registration page");

//     const {name,email,phone,password,cpassword}=req.body;

//     if(!name || !email || !phone || !password || !cpassword)
//     {
//         return res.status(442).json({error: "plz fill the fields properly"});
//     }

//     User.findOne({email: email})
//      .then((userExist)=>
//      {
//         if(userExist)
//         {
//             return res.status(422).json({error: "email already exists"});
//         }

//         const user=new User({name,email,phone,password,cpassword});

//         user.save().then(()=>
//         {
//             res.status(201).json({message: "user registered successfully"});
//         }).catch((err)=>res.status(500).json({error:"failde to registred"}));
//      }).catch(err=> {console.log(err);});

// });

router.post('/register',async (req,res)=>
{
    // console.log(req.body);
    // res.json({message: req.body});
    // // res.send("mera registration page");

    const {name,email,phone,password,cpassword}=req.body;

    if(!name || !email || !phone || !password || !cpassword)
    {
        return res.status(442).json({error: "plz fill the fields properly"});
    }

    try {
        const userExist= await User.findOne({email: email});
        if(userExist)
        {
            return res.status(422).json({error: "email already exists"});
        }
        else if(password !=cpassword)
        {
            return res.status(422).json({error: "passwords are not matching"});
        }
        else
        {
            const user=new User({name,email,phone,password,cpassword});
            await user.save();
            res.status(201).json({message: "user registered successfully"});
        }
        
    } catch (err) {
        
        console.log(err);
    }
});

//login route
router.post('/signin',async(req,res)=>{
    // console.log(req.body);
    // res.json({message: "awesome"});

    let token;

    try {
        const {email,password}=req.body;

    if(!email || !password)
    {
        return res.status(442).json({error: "plz fill the fields properly"});
    }
    const userLogin= await User.findOne({email: email});

    if(userLogin)
    {
        const isMatch=await bcrypt.compare(password,userLogin.password);
        token=await userLogin.generateAuthToken();
        console.log(token);

        res.cookie("jwtoken",token,{
            expires: new Date(Date.now()+25892000000),
            httpOnly: true
        })
       
    
        if(!isMatch)
        {
            res.status(400).json({error:"invalid passwords"});
        }
        else
        { 
            res.json({message:"user signin successfully"});
        }
    }
    else
    {   
        res.status(400).json({error:"invalid credentials"});
    }    
    } catch (err) {
        console.log(err);
    }

});

router.get('/about',authenticate, (req,res)=>
{
    console.log('hello my about');
    res.send(req.rootUser);
})

router.get('/logout',(req,res)=>
{
   console.log("hello my about");
   res.clearCookie('jwtoken',{path:'/'});
   res.status(200).send('user logout');
})


module.exports=router;