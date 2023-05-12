const asyncHandler=require('express-async-handler');
const Recepi=require('../models/Recepi');

const getRecepi=asyncHandler(async(req,res)=>{
	const recepi=await Recepi.find({user_id:req.user.id});
	res.status(200).json(recepi);
});

const getSingleRecepi=asyncHandler(async(req,res)=>{
	const recepi=await Recepi.findById(req.params.id);
	res.status(200).json(recepi);
});

const createRecepi=asyncHandler(async(req,res)=>{
	const {title, content, ingrediants}=req.body;
	if(title==null || content==null || ingrediants==null){
		res.status(404);
		throw new Error("Not Found");
	}
	
	const recepi=await Recepi.create({
		title,
		content,
		ingrediants,
		user_id:req.user.id
	});
	
	res.status(200).json(recepi);
	
});


const updateRecepi=asyncHandler(async(req,res)=>{
	const recepi=await Recepi.findById(req.params.id);
	if(!recepi){
		res.status(404);
		throw new Error("Not Found");
	}
	
	if(recepi.user_id.toString() !== req.user.id){
		res.status(403);
		throw new Error("not permissible");
	}
	
	const recepiUpdate=await Recepi.findByIdAndUpdate(
	  req.params.id,
	  req.body,
	  {new:true}
	);
	
	res.status(200).json(recepiUpdate);
});

const delRecepi=asyncHandler(async(req,res)=>{
	const recepi=await Recepi.findById(req.params.id);
	if(!recepi){
		res.status(404);
		throw new Error("Not Found");
	}
	if(recepi.user_id.toString() !== req.user.id){
		res.status(403);
		throw new Error("not permissible");
	}
	
	await Recepi.deleteOne({_id:req.params.id});
	res.status(200).json(recepi);
});



module.exports={
	getRecepi,
	getSingleRecepi,
	createRecepi,
	updateRecepi,
	delRecepi,
	
}



