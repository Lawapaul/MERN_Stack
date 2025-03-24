
function p1(name,age){
    const obj={
        name: name,
        age: age,
        talk(){
            console.log(`My name is ${this.name}`)
        }
    }
    return obj;
}
let person1 = p1("Harshit",19);