let num=prompt("Enter Number: ");
let sum=0;
while(num>0){
    let digit=num%10;
    sum+=digit;
    num=(num-digit)/10;
}
console.log(sum);