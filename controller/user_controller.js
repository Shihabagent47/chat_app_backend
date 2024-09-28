const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
dotenv.config();
const getUserProfile= async(req,res)=>{
    const jwtSecurityKey=process.env.JWT_SECRET_KEY;
    console.log(jwtSecurityKey);
    const data={
        time:Date(),
        userId:12,
    }
    const token=jwt.sign(data,jwtSecurityKey);

    res.status(200).json({message:token});
};

module.exports={getUserProfile};