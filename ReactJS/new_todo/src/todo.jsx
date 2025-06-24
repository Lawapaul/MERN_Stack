import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function Todo(){
    let [user_input,setuser_input] = useState("");
    let [addbtn,setaddbtn] = useState(false);
    let [task,settask] = useState([]);
    let [btnflag,setbtnflag] = useState(false);
    let [idx,setidx] = useState(0);
    function input(event){
        setuser_input((prev)=>{
            return event.target.value;
        })
    }
    function handlesubmit(event){
            setbtnflag(true);
            let result = {
                id: uuidv4(),
                task: user_input
            }
            settask((prev)=>{
                return [...prev,result]
            })
    }
    function delete_task(id){
        settask((prev)=>{
           return prev.filter((p)=>p.id !==id);
        })
    }
    console.log(task);
    return (
        <>
            <input type="text" placeholder="Enter Task" onChange={input}></input>
            <button onClick={handlesubmit}>Add</button>
            <hr></hr>
            {btnflag && task.map((res,idx)=>(
                <div key={idx} style={{width: "200px"}}>
                    <ul>
                    <li>
                        <h3>{res.task}</h3>
                        <span>
                        <button onClick={()=>{
                            delete_task(res.id);
                        }}>Delete</button>
                        <button>Done</button>
                        </span>
                        </li>
                    </ul>
                </div>
            ))}
 
        </>
    )
}
export default Todo;