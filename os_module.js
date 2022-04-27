const os = require('os')
const http = require('http');
const port = 8080;
 
console.log("OS Module: ")
console.log("Platform:",os.platform())
console.log("Release:",os.release())
console.log("Type:",os.type())
console.log("Home Directory:",os.homedir())
console.log("Version:",os.version())
console.log("User Info:",os.userInfo())
console.log("Total Memory",os.totalmem())
 
console.log("HTTP Module:")
 
const server = http.createServer((req, res)=>{
    res.end("Hello World");
})
 
server.listen(port, ()=> console.log("Server is listening at http://localhost:"+port));