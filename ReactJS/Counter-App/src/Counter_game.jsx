
import {useState} from "react";

function Counter(){
    let [count,setCount] = useState(0);
    function increment(){
        setCount((prev)=>prev+1);
    }
    function Decrement(){
        setCount((prev)=>prev-1);
    }
    function Reset(){
        setCount(0);
    }

    return (<div className="container">
        <h1>{count}</h1>
        <span>
            <button onClick={increment}>Increment</button> &nbsp;
            <button onClick={Decrement}>Decrement</button> &nbsp;
            <button onClick={Reset}>Reset</button>
        </span>
    </div>
    );
}
export default Counter;