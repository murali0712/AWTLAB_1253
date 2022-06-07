let add1=(x,y)=>x+y;
console.log(add1(3,4));
console.log(typeof add1);
let square1=(x)=>x*x
console.log(square1(10));
let students=['abc','def','gfg'];
let studlength=students.map(student=>{
    return student.length;
});
console.log(studlength);
let message=()=>console.log("arrow function with no parameters");
message();
