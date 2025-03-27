let btn=document.querySelector('.btn_inpu');
let text=document.querySelector('.inpu');
let d_field=document.querySelector('.display');

function add(){
    let content=document.createElement('div');
    d_field.appendChild(content);
    content.style.height='60px';
    content.style.width='100%';
    content.classList.add('content');
    let text1=document.createElement('p');
    content.appendChild(text1);
    text1.innerText=text.value;
    text1.style.textAlign='center';
    content.style.borderBottom='2px solid black';
    let btn_secondary=document.createElement('button');
    let check=document.createElement('input');
    check.type='checkbox';
    content.appendChild(check);
    content.appendChild(btn_secondary);
    check.addEventListener('change',function(){
        if(check.checked==true){
            text1.style.textDecoration='line-through';
        }
    })
    btn_secondary.innerText='Delete';
    content.style.display='flex';
    content.style.justifyContent='space-between';
    function del(){
        content.style.display='none';
    }
    btn_secondary.addEventListener('click',del);
    
}
btn.addEventListener('click',add);