const path = require('path');

const express = require('express');
const { registeredHomes } = require('./hostRouter');

const userRouter = express.Router();

userRouter.get('/',(req,res,next)=>{
    console.log('airbnb ka page',registeredHomes);
    res.sendFile(path.join(__dirname,'../','views','home.html'));
});

userRouter.get('/user/select-home',(req,res,next)=>{
    console.log("select-page");
    res.render('select-home',{registeredHomes});
});

module.exports = userRouter;