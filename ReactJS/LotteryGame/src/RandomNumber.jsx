function RandomNumber(num){
    let i=0;
    let digit="1";
    for(let i=0;i<num;i++){
        digit+="0";
    }
    return Math.floor(Math.random()*(parseInt(digit)));
}
export {RandomNumber};