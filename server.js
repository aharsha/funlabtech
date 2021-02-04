//load mongodb module
var mongoModule = require("mongodb");

//create mongodb object
var mongoDbObj = mongoModule.MongoClient;

var url="mongodb://localhost:27017/funlab-tach";



//load express module
var exp = require("express");

//create express object
var expObj = exp();

//to read form data we have to use bodyparser of express
var parser= require("body-parser");

expObj.use(parser.json());



expObj.post('/addstudent' , function(req,res)
{
    console.log(req.body.rollno);
res.send("student added");


mongoDbObj.connect(url, function(err,database)
{
if(err) throw err;
console.log("Database connected");
var dataBaseObj = database.db("funlab-tach");
var stu = {rollno: req.body.rollno,name:req.body.name, marks:req.body.marks }
dataBaseObj.collection("student").insertOne(stu,function(err,response)
{
if(err) throw err;
console.log("one row is inserted");
database.close();
})
});
});
//create server
expObj.listen(4141, function()
{
    console.log("server started on 4141 port");
})
//localhost:4141/getuser

