let welcome=document.querySelector(".input");
let container=document.querySelector('.container');
let start_page=document.querySelector(".start");
let question = [{question: 'What does HTML stand for?' , 
options: {
    opt1: "a) Hypertext Markup Language" ,
    opt2: "b) Home Text Markup Language",
    opt3: "c) Hyperlink Text Markup Language",
    opt4: "d) None of the above"
},
Ans: "1"
},
{question: 'Which tag is used to define the largest heading in HTML?',
options: {
    opt1: "a) <h6>" , 
    opt2: "b) <h1>", 
    opt3: "c) <head>",
    opt4: "d) <header>"
},
Ans: "2"},

{question: 'Which tag is used to insert an image in HTML?',
options: {
    opt1: "a) <image>" , 
    opt2: "b) <img>", 
    opt3: "c) <src>",
    opt4: "d) <picture>"
},
Ans: "2"}
]
let answer=[];
let ques=document.querySelector('.ques');
document.querySelector('.btn_welcome').addEventListener('click',()=>{
    let input=document.querySelector(".name").value;
    welcome.style.display= "none";
    start_page.style.display="flex";
    document.querySelector('.username').innerHTML = `<h1>Welcome user : ${input}<h1/>`
    
})
let question_container=document.querySelector('.question')
document.querySelector('.btn_continue').addEventListener('click',()=>{
    start_page.style.display='none';
    question_container.style.display="block";
})

function question_change(count){
    ques.innerHTML=`<h3>${question[count].question}</h3>`;
    for(let i=1;i<5;i++){
        let label=document.querySelector(`.option${i}`);
        label.textContent=`${question[count].options[`opt${i}`]}`;
    }
}

let i=0;
let checked;
question_change(i);
let btn_next=document.querySelector(".btn_submit");
btn_next.addEventListener('click',()=>{
    checked=document.querySelector('input[name=opt]:checked');
    answer.push(checked.id);
    if(i==2){
        let score=0;
        for(let i=0;i<question.length;i++){
            if(parseInt(question[i].Ans) == parseInt(answer[i])){
                score++;
            }
        }
        console.log(score);
        document.querySelector('.question').style.display = 'none';
        let h1= document.createElement('h1');
        h1.innerHTML = `Thankyou For Attempting the Quiz <br></br><br></br>Score: ${score}/3`;

        container.appendChild(h1);
    }
    else{
        i++; 
        question_change(i);
        checked="";
    }
    })

