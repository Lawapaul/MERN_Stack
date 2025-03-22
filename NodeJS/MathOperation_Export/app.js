
const sum=(a,b)=>{
    console.log(a+b)
}
const sub=(a,b)=>{
    console.log(a-b);
}
const multi=(a,b)=>{
    console.log(a*b);
}
const div=(a,b)=>{
    console.log(a/b);
}

let obj={
    add:sum,
    sub:sub,
    mul:multi,
    div:div}

module.exports=obj;