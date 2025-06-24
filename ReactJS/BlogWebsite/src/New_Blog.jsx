

import { useState } from "react"
function New_Blog({add}){
    let [result,setresult] = useState({
        username: "",
        content: ""
    })
    function handlesubmit(event){
        event.preventDefault();
        add(result);
    }
    function userinput(event){
        setresult((prev)=>{
            return {...prev,[event.target.name] : event.target.value}
        })
    }

    
    return (
            <form>
                <br /><br /><br />
                <input type="text" placeholder="Enter Username" name="username" value={result.username} onChange={userinput}></input>
                <br /><br />
                <textarea placeholder="Enter Blog" rows={20} cols={60} name="content" value={result.content} onChange={userinput}></textarea>
                <br /><br />
                <button onClick={handlesubmit}>Submit</button>
            </form>
    )
}
export default New_Blog;