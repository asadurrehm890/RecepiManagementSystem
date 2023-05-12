const mongoose=require('mongoose');

const recepiSchema=mongoose.Schema({
	user_id:{type:mongoose.Schema.Types.ObjectId, required:true, ref:"User"},
	title:{type:String, required:true},
	content:{type:String, required:true}, 	
	ingrediants:[String],
	
	
},{timestamps:true});

const Recepi=mongoose.model('Recepi', recepiSchema);
module.exports=Recepi;										

