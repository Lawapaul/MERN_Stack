
function person(pname,age){
    this.pname=pname;
    this.age=age;
}
person.prototype.talk = function talk(){
    console.log(`Hello! My name is ${this.pname}`);
}

let p1= new person("Harshit",19);