let num=prompt("Enter Number: ");
let count=0;
let temp=num;
while(temp>0){
    let digit=temp%10;
    count++;
    temp=(temp-digit)/10;
}
console.log(count);