const express=require('express');
const dotenv=require('dotenv').config();
const gamihisRouter=require('./routes/gamihisRouter');
const usersRouter= require('./routes/usersRouter');
const loginRouter=require('./routes/loginrouter')
const cors =require('cors');

const app=express();
require('dotenv').config();
app.set('port', process.env.PORT || 3001);
app.use(express.json());
app.use(cors());
app.use('/api', gamihisRouter);
app.use('/api', usersRouter);
app.use('/api', loginRouter);
module.exports=app;