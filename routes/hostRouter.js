const express = require('express');
const rootDir = require('./../utils/rootpath');
const hostRouter = express.Router();
const path = require('path');
const home = require('../controller/home');
hostRouter.get('/host/add-home',home.getAddHome);




hostRouter.post('/host/add-home',home.addHome)


hostRouter.get('/retry',(req,res,next)=>{
    
    res.send(`<h1>ENTER YOUR COMPLETE DETAILS </h1>
        <a href="/host/add-home">try again </a>
        `)
});


exports.hostRouter = hostRouter;
exports.registeredHomes = home.registeredHomes;