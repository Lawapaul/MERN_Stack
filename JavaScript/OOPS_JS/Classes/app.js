class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    details(){
        console.log(`Hello! My name is ${this.name} and age is ${this.age}.`)
    }
}
let p1=new Person("Harshit",19);