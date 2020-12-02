const express=require("express");
const connectDB= require("./config/db");
const app=express();

//Connect to Database
connectDB();
app.use(express.json({extended:false}));
app.get('/',(req,res)=>res.send('API Running'));

//Routes
app.use('/api/users',require('./routes/api/users'));
app.use('/api/auth',require('./routes/api/auth'));
app.use('/api/profile',require('./routes/api/profile'));
app.use('/api/story',require('./routes/api/story'));
app.use('/api/chainstory',require('./routes/api/chainstory'));
app.use('/api/videostory',require('./routes/api/videostory'));
app.use('/api/picturestory',require('./routes/api/picturestory'));
app.use('/api/comment',require('./routes/api/comment'));
 
const PORT=process.env.PORT || 5000
app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));
