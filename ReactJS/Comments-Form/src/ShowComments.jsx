import { useState } from "react";
import CommentForm from "./Comments_Form"
import "./ShowComments.css"
function ShowComments(){
    let [showcomment,setshowcomment] = useState([{
        username: "HarshitShekhawat",
        comment: "Amazing Experience",
        rating: 5
    }])
    function update(comment){
        setshowcomment((prev)=>{
            return [...prev,comment]
        })
    }
    return (
        <>
            {showcomment.map((event, index) => (
                <div key={index} className="container">
                    <h3>Hello</h3>
                    <h3>{event.comment}</h3>
                    <h3>{event.rating}</h3>
                </div>
            ))}
            <CommentForm add={update} />
        </>
    );
}
export default ShowComments;