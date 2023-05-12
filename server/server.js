const express=require('express');
const dotenv=require('dotenv').config();
const connectDB=require('./config/dbConnection');
const cors=require("cors");


connectDB();
const app = express();
const port=process.env.PORT||8001;

app.use(express.json());
app.use(cors());
app.use('/api/recepi', require('./router/foodRouter'));
app.use('/api/user', require('./router/usersRouter'));

app.listen(port, ()=>{
	console.log("location:8000");
})