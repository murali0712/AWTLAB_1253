var http=require('http')
var server = http.createServer(function(req,res){
    if(req.url=="/"){
    res.write("welcome to home page")
    res.end(); 
    }
    if(req.url=="/it"){
        res.write("welcome to IT")
        res.end();
    }
})
server.listen(1253)
console.log("http module")