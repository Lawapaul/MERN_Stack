const object = {
    message: 'Hello World',
    display(){
        console.log(this.message);
    }
}
setTimeout(()=>{
    object.display()
},4000);

setInterval(()=>{
    object.display()
},2000);