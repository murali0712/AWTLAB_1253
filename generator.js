function* display(){
console.log("hi");
console.log("how are you"); 
yield(10);
console.log("from display function");

}

var a=display(); 
console.log(a.next()); 
console.log("welcome");
console.log(a.next());