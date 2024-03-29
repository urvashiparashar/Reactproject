const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const jwt=require("jsonwebtoken");

const userSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    tokens:[
        {
            token:{
                type: String,
                required: true
            }
        }
    ]

})

//hashing the password
userSchema.pre('save',async function(next){

    console.log("hi from inside");

   if(this.isModified('password'))
   {
      console.log("hii I am pre password");
     this.password=await bcrypt.hash(this.password,12);
     this.cpassword=await bcrypt.hash(this.cpassword,12);
   }
   next();
});

//we are generating token
//userSchema is an instance
userSchema.methods.generateAuthToken=async function()
{
    try {

        let token=jwt.sign({_id:this._id},process.env.SECRET_KEY);
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        return token;
        
    } catch (err) {

        console.log(err);
        
    }
}

//collection creation

const User=mongoose.model('USERS',userSchema);

module.exports=User;
