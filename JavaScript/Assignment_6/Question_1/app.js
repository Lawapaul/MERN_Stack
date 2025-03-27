list=[10,20,30,60];
const arrayAverage=(list) =>{
    let sum=0;
    for(let i=0;i<list.length;i++){
        sum+=list[i];
    }
    return sum/list.length;
}
console.log(arrayAverage(list));