const express = require('express');
const rootDir = require('./../utils/rootpath');
const hostRouter = express.Router();
const path = require('path');



hostRouter.get('/host/add-home',(req,res,next)=>{   // for adding home 
    
    res.sendFile(path.join(__dirname,'../','views','add-home.html'));
});

const registeredHomes =[];


hostRouter.post('/host/add-home',(req,res,next)=>{
    console.log('entering details');
    if(!req.body.housename||!req.body.mail){
        console.log('detials where not sufficient ');
        res.redirect("/retry");
        
        
    }
       const exists = registeredHomes.some((obj) => {
    return obj[req.body.housename] === req.body.mail;
    });

    if (exists) {

     res.send(`<h1>Already Registered</h1>`);
    }


    console.log(` ${req.body.housename} is registered  and owner is ${req.body.mail}`);
    registeredHomes.push({
     houseName:req.body.housename,
     mail:req.body.mail,
     location:req.body.location,
     price:req.body.price
    });
    console.log('kya code yha tk fta?',registeredHomes);
    res.sendFile(path.join(rootDir,'views','registered.html'));  
})


hostRouter.get('/retry',(req,res,next)=>{
    
    res.send(`<h1>ENTER YOUR COMPLETE DETAILS </h1>
        <a href="/host/add-home">try again </a>
        `)
});


exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;