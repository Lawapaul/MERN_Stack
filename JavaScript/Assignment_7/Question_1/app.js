let arr=[1,2,3,4,5];
const avg= ()=>{
    let count=0;
    for(let i=0;i<arr.length;i++){
        count+=arr[i];
    }
    return count/arr.length;
}
console.log(avg());