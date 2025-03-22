let sum=(a,b)=>{
    return a+b
};
let sub=(a,b)=>{
    return a-b
};
let multi=(a,b)=>{
    return a*b;
}
let div=(a,b)=>{
    return a/b;
}

let math={
    sum:sum,
    sub:sub,
    multi:multi,
    div:div
};

module.exports=math