const express=require('express');

const {
	getRecepi,
	getSingleRecepi,
	createRecepi,
	updateRecepi,
	delRecepi,
	
} =require('../controllers/recepiController');
const validateToken=require('../middlewares/validateToken');

const router=express.Router();



router.use(validateToken);
router.route('/').get(getRecepi).post(createRecepi);
router.route('/:id').get(getSingleRecepi).put(updateRecepi).delete(delRecepi);

module.exports=router;