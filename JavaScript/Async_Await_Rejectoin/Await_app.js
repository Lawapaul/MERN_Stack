function ColorChange(color){
    return new Promise((success,fail)=>{
        setTimeout(()=>{
            document.querySelector('h1').style.color=color;
            success();
        },1000)
    })
}
async function demo(){
    await ColorChange('red');
    await ColorChange('blue');
    await ColorChange('yellow');
    ColorChange('purple');
}
demo();