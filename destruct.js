//array destructuring
const stud=["shiva","ravi","raghu","charan"];
const[a,b,...args]=stud;
console.log(a);
console.log(b);
console.log(args);

//destructuring with default values
var x,y;
[x=50,y=70]=[100]
console.log("x value "+x);
console.log("y value "+y);

//destructuring objects
const student=
{
    fname:"cvr",
    lname:"it",
    year:3,
    sem:2,
    section:"a"
} 
mystudent(student);
function mystudent({year,sem,section,fname})
{
    console.log(year+"year "+"Sem "+sem+"Section "+section+"student name "+fname);  

}