let h1=document.querySelector("h1");
function ColorChange(data,delay){
    return new Promise((resolve,revoke)=>{
        setTimeout(()=>{
            h1.style.color=data;
            resolve("Color Changed");
        },delay);
    });
}
ColorChange("red",1000).then(()=>{
    console.log("Color Changed to Red")
    return ColorChange("orange",1000);
})
.then(()=>{
    console.log("Color Changed to Orange")
    return ColorChange("Yellow",1000);
})
.then(()=>{
    console.log("Color Changed to Yellow")
    return ColorChange("blue",1000);
})
.then(()=>{
    console.log("Color Changed to Blue");
})