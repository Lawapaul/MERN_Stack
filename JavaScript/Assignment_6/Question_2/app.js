let num=prompt("Enter Number: ");
const isEven=(num)=>{
    if(num%2==0){
        return 1;
    }
}
if(isEven(num)==1){
    console.log('yes');
}
else{
    console.log('No');
}