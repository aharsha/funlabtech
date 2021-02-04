//load mongodb module
var mongoModule = require("mongodb");

//create mongodb object
var mongoDbObj = mongoModule.MongoClient;

var url="mongodb://localhost:27017/funlab-tech";

mongoDbObj.connect(url, function(err,database)
{
if(err) throw err;
console.log("Database connected");
var dataBaseObj = database.db("funlab-tech");
var stu = {rollno: 1,name:'raju', marks:450 }
dataBaseObj.collection("student").insertOne(stu,function(err,response)
{
if(err) throw err;
console.log("one row is inserted");
database.close();
})
});

