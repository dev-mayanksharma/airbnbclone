const path = require('path');



exports.getAddHome = (req,res,next)=>{   // for adding home 
    
    res.sendFile(path.join(__dirname,'../','views','add-home.html'));
};