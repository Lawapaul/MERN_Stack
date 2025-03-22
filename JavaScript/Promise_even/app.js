let num=prompt("Enter Number: ");
function even(num){
    return new Promise((yes,no)=>{
        if(num%2==0){
            yes();
        }
        else{
            no();
        }
    })
}
even(num).then(()=>{
    console.log("It is an Even Number");
    let num2=prompt("Enter Number: ")
    return even(num2).then(()=>{
        console.log("It is an Even Number");
    })
})
.catch(()=>{
    console.log("Not an Even Number");
})