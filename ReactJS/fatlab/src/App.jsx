import { useState } from 'react'
import './App.css'
    function App() {
        let [task,settask] = useState([]);
        let [input,setinput] = useState("");
        let [id,setid] = useState(0);
        let [flag,setflag] = useState(true);
        function handleinput(event){
            setinput(()=>{
            return event.target.value;
            })
        }
        function handlesubmit(event){
            event.preventDefault();
            setflag(true);
            let result={
              t_id: id,
              content: input,
              done: false
            }   
            settask((prev)=>{
            return [...prev,result];
            })
            setid((prev)=>{
            return prev+1;
            })
      }
function handledelete(id){
settask((prev)=>{
return prev.filter((p)=>p.id !== id);
})
}
function done(id){
task.forEach((res)=>{
if(res.id == id){
res.done = true;
}
})
}
return(
<>
<input type='text' placeholder='Enter Task' style={{height: "50px" , width: "300px"}}
onChange={handleinput}></input>
<br></br><br></br>
<button onClick={handlesubmit}>Submit</button>
<hr></hr>
{flag && task.map((res,idx)=>{
console.log(res.content);
<div key={idx}>
<h1 style={res.done == true ? {textDecoration: "line-through"} : ""}>{res.content}</h1>
<button onClick={()=>{
handledelete(res.id);
}}>Done</button>
<button onClick={()=>{
done(res.id);
}}>Delete</button>
</div>
})}
</>
)
}
export default App