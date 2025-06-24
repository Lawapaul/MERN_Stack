import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
function Todo(){
    let [taskArr,settaskArr] = useState([{task: "sample-task",id: uuidv4(),done: false}]);
    let [todo,setTodo] = useState("");
    function user_input(event){
       setTodo(event.target.value);
    }
    function update(){
        settaskArr((prev)=>{
            return [...prev,{task: todo,id: uuidv4(),done: false}];
        })
    }
    function delete_task(id){
        settaskArr((prev)=>{
            return prev.filter((p)=> p.id !== id);
        })
    }
    function done(id){
        settaskArr((prev)=>{
            return prev.map((p)=>{
                if(p.id === id){
                    return {...p,done: true};
                }
                else{
                    return p;
                }
            })
        })
    }
    
    return (
        <>
            <input placeholder="Enter Task" value={todo} onChange={user_input}></input>
            <button onClick={update}>Add</button>
            <hr></hr>
            <ul>
                {
                    taskArr.map((p)=>{
                        return <span><li key={p.id} style={p.done ? {textDecoration: "line-through"} : {}}>
                                {p.task}
                                &nbsp;&nbsp;
                                <button onClick={()=>{
                                    delete_task(p.id);
                                }}>Delete</button>
                                &nbsp;&nbsp;
                                <button onClick={()=>{
                                    done(p.id);
                                }}>Done</button>
                                </li>
                                </span>
                    })
                }
            </ul>
        </>
        
    );

}
export default Todo;