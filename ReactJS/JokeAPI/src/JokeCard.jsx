import { useState } from "react"
import "./JokeCard.css"
export default function JokeCard({api_data}){
    let [result,setresult] = useState({});
    return(
        <div className="card">
            <h1>{api_data.type}</h1>
            <h1>{api_data.joke}</h1>
        </div>
    )
}