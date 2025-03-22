
function colorchange(data){
    return new Promise((success,reject)=>{
        setTimeout(()=>{
            document.querySelector(".heading").style.color=data;
            success();
        },1000);
        
    });
}

colorchange("red").then(()=>{
    console.log("Change SuccessFully!")
    return colorchange("blue");
})
.then(()=>{
    console.log("Change SuccessFully!");
    return colorchange("Yellow");
})