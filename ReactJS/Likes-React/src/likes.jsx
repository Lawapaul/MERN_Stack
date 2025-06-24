import "./likes.css"
import {useState} from "react";

export default function Likes(){
    const [likes,setLikes]=useState(0);
    const inLikes= ()=>{
        setLikes(likes=>likes+1);
    }
    return (
        <>
        <h1>States in React</h1>
        <h1>Click = {likes}</h1>
        <i className="fa-solid fa-heart" onClick={inLikes}></i>
        </>
    );
}
