//loading express module
var expmodule = require("express");

//create object through module
var expObject = expmodule();

expObject.get("/getproducts",function(req,res)
{
    //req is the first parameter can be with any name
    //req is used to read  data from browser
    //res is the second parameter can be with any name
    //res is used to send data to browser 
    res.send("dell, lenovo, hp");
})

var server = expObject.listen(4040,function()
{
    console.log("server started");
});

