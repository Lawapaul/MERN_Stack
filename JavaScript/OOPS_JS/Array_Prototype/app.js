let arr=[1,2,3];
arr.sayHello = ()=>{
    console.log("Hello");
}

//To Print all the prototypes of Array
console.log(arr.__proto__);

//Copy of Prototype
arr.__proto__.push=(n)=>{
    console.log(`Number pushed: ${n}`);
    arr[arr.length]=n;
}
