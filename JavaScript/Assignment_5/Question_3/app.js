let arr=["Australia","Germany","United States of America"];
function max(){
    let initial=arr[0].length;
    let maxi=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i].length > initial){
            initial=arr[i].length;
            max=arr[i];
        }
    }
    console.log(max);
}
max();
