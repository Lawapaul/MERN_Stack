let arr=[1,2,3,4,5,6,7];
const doubleAndReturnArgs=(...number)=>{
    arr.push(number*2);
}
doubleAndReturnArgs(8,9,10);
console.log(arr);