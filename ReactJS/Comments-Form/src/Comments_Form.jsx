import { useState } from "react";
function CommentForm({add}){
    let [commentform,setcommentform] = useState({
        username: "",
        comment: "",
        rating: 5,
    })
    function handleinput(event){
        setcommentform((prev)=>{
            return {...prev,[event.target.name] : event.target.value}
        })
    }
    function handlesubmit(event){
        event.preventDefault();
        console.log(commentform);
        add(commentform);
    }
    return (
        <>
            <hr></hr>
            <form>
            <h1>Form Comments</h1>
            <br /><br />
            <input type="text" placeholder="Enter username" name="username" value={commentform.username} onChange={handleinput}></input>
            <br /><br />
            <textarea placeholder="Enter comment" rows={20} cols={50} name="comment" value={commentform.comment} onChange={handleinput}></textarea>
            <br /><br />
            <input type="number" min={1} max={5} name="rating" value={commentform.rating} onChange={handleinput}></input>
            <br /><br />
            <button onClick={handlesubmit}>Submit</button>
    </form>

     </>
    )
   
}
export default CommentForm;