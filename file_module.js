var fs=require('fs');
fs.readFile("sample.txt",function(err,data)
{
    console.log(data.toString());
})
fs.writeFile("sample.txt","Welcome to IT-A",function(err,data)
{
    console.log("data inserted");
})
fs.appendFile("sample.txt"," from cvr",function(err,data)
{
    console.log("data appended");
})
  