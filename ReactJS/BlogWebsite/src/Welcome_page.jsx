import { useState } from "react";
import New_Blog from "./New_Blog";
import "./View_Blog.css"
import "./Welcome_page.css";
import View_Blog from "./View_Blog";
function Welcome_page({add,setview}){
    let [flag,setflag] = useState(false);
    function handlesubmit(){
        setflag(true);
        setviewblogs(false);
    }
    function handleview(){
        setflag(false);
        setviewblogs(true);
    }
    return (
        <>
        <h1>Welcome to BloggersHeaven!!!</h1>
        <button onClick={handlesubmit}>Click to Add</button>
        &nbsp;&nbsp;
        <button onClick={handleview}>View Blogs</button>
        {flag && (
            <div className="container">
                <New_Blog add={add}/>
            </div>
        )}
        </> 
    )
}
export default Welcome_page;