
class Person{
    constructor(pname,age){
        this.pname=pname;
        this.page=age;
    }
}

class Student extends Person{
    constructor(pname,age,marks){
        super(pname,age);
        this.marks=marks;
    }
}
class Teacher extends Person{
    constructor(pname,age,salary){
        super(pname,age);
        this.salary=salary;
    }
}