class student{
    constructor(name){
        this.name =name;
    }
    display(){
        console.log("student name from parent class: "+this.name);
    }
}

class student1 extends student{
    constructor(name,rollno){
        super(name);
        this.rollno= rollno;
    }
    display1(){
        super.display();
        console.log("student name is "+this.name+" roll no is "+this.rollno);
    }
}

let s=new student1("murali",1253);

s.display1();