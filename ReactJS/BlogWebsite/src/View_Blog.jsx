import { useState } from "react"
import "./View_Blog.css"
import Welcome_page from "./Welcome_page"
function View_Blog(){
    let [result,setresult] = useState([{
        username: "",
        content: "",
    }])
    function handleresutl(user_addeds){
        setresult((prev)=>{
            return [...prev,user_addeds]
        })
    }
    let [viewblogs,setviewblogs] = useState(false);
    return (
        <>
        <Welcome_page add={handleresutl} setview={setviewblogs}/>
        <br /><br />
        {viewblogs && result.map((res, idx) => (
                <div className="display" key={idx} style={{border: '2px solid white'}} >
                    <h3>{res.username}</h3>
                    <h3>{res.content}</h3>
                </div>
            ))}
        </>
    )
}
export default View_Blog;