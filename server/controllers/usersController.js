const asyncHandler=require('express-async-handler');
const bcrypt=require('bcrypt');
const User=require('../models/User');
const jwt=require("jsonwebtoken");

const registerUser=asyncHandler(async(req,res)=>{
	const {username, email, password}=req.body;
	
	const user=await User.findOne({email});
	if(user){
		res.status(400);
		throw new Error("Email Already Registered");
	}
	
	if(username==null||email==null||password==null){
		res.status(400);
		throw new Error('Not Found');
	}
	
	const hashedPassword=await bcrypt.hash(password, 10);
	
	const createUser=await User.create({
		username, email, password:hashedPassword
	});
	
	res.status(200).json({message:"user registered"});
	
});

const userlogin=asyncHandler(async(req,res)=>{
	const {email, password}=req.body;
	
	if(!email || !password){
		res.status(400);
		throw new Error("All Fields Are Manadatery");
	}
	
	const user=await User.findOne({email});
	if(user && bcrypt.compare(password, user.password)){
		const accessToken=jwt.sign({
			user:{
				username:user.username,
				email:user.email,
				id:user.id
			}
		},
		process.env.ACCESS_TOKEN,
		{expiresIn:"180m"}
		);
		
		res.status(200).json({accessToken});
		
	}else{
		res.status(401);
		throw new Error("Email or Password is not correct");
	}
	
});

const currentUser=asyncHandler(async(req,res)=>{
	res.status(200).json(req.user);
});

module.exports={
	registerUser,
	userlogin,
	currentUser
}