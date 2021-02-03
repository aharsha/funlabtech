//load express module
var exp = require("express");

//create express object
var expObj = exp();

//create api using express object
expObj.get('/getuser' , function(req,res)
{
res.send("abc");
});

//create server
expObj.listen(4141, function()
{
    console.log("server started on 4141 port");
})
//localhost:4141/getuser