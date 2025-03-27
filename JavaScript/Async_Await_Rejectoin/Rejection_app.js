function rand(){
    return new Promise((success,failure)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*10) +1;
            if(num<=3){
                failure("Number is less than 3......")
            }
            else{
                console.log(num);
                success("Number succesfully printed....")
            }
        },1000)
    })
}
async function print(){
    try{
        await rand();
        await rand();
        await rand();
    }
    catch(e){
        console.log(`Error Found: ${e}`);
    }
}