//load express module
var exp = require("express");

//create express object
var expObj = exp();

//to read form data we have to use bodyparser of express
var parser= require("body-parser");

expObj.use(parser.json());

//create api using express object
expObj.get('/getuser' , function(req,res)
{
res.send("abc");
});

expObj.post('/addflight' , function(req,res)
{
    console.log(req.body.flightNumber);
res.send("flight added");
});
//create server
expObj.listen(4141, function()
{
    console.log("server started on 4141 port");
})
//localhost:4141/getuser