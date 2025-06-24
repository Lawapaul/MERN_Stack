function Check_Sum(value,target){
    let temp=value;
    let digit=0;
    while(temp>0){
        digit = digit + (temp%10);
        temp=Math.floor(temp/10);
    }
    console.log(digit);
    if(digit === target){
        return true;
    }
    return false;
}
export {Check_Sum}