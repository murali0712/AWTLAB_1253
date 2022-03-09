class student{
    static display(){
        console.log("static method in parent class");
    }
}
class student1 extends student{
    display1(){
    console.log("using child class to display");
}
}

student1.display();
