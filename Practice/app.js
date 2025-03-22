let url="http://universities.hipolabs.com/search?name="
let btn=document.querySelector("button");
let key=document.querySelector("input");
btn.addEventListener('click',async()=>{
    await retrive();
})
async function retrive(){
    try{
        let res=await axios.get(url+key.value);
        let ul=document.createElement('ul');
        document.querySelector('body').appendChild(ul);
        for(let i =0;i<res.data.length;i++){
            let li=document.createElement('li');
            li.innerText=res.data[i].name;
            document.querySelector('ul').appendChild(li);
        }
    }
    catch(e){
        console.log("Error encountered!!!");
    }
}

// let url="http://universities.hipolabs.com/search?name="
// let inpu=document.querySelector('input');
// let btn=document.querySelector('button');
// let p=document.querySelector('p');
// let country=inpu.value;

// btn.addEventListener('click',async()=>{
//     await getdata();
// })
// let str=""
// async function getdata(){
//     let res=await axios.get(url+inpu.value);
//     let ul=document.createElement('ul');
//     document.querySelector('body').append(ul)
//     for(let i=0;i<res.data.length;i++){
//         let li=document.createElement('li');
//         document.querySelector('ul').append(li);
//         li.innerText=res.data[i].name
//     }
//     p.innerText=str;
// }
