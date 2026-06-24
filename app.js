const express = require('express'); //ext
const path = require('path');
const rootDir = require('./utils/rootpath');


const userRouter = require('./routes/userrouter');//local
const {hostRouter} = require('./routes/hostRouter');//local
const {registeredHomes} = require('./routes/hostRouter');//local

const app = express(); // decleration of app

app.set('view engine','ejs');
app.set('views','views');


app.use(express.static(path.join(rootDir,'public')));
app.use((req,res,next)=>{
    console.log('requests',req.method,req.url);
    
next();
});



app.use(express.urlencoded());
app.use(userRouter);
app.use(hostRouter);





app.use((req,res,next)=>{
    res.status(404).send('Error:404 ,your page in not found in aribnb ')
})



const port = 1256;
app.listen(port,() => {
        console.log(`the server is running at http://localhost:${port}`);
})