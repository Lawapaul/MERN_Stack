import { useState } from "react";

function Button({click,entered}){
    return (
        <span>
            <button onClick={click} className="celsius" style={entered === "celsius" ? {backgroundColor: "red"} : {backgroundColor: ""}}>Celsius</button> &nbsp; &nbsp;
            <button onClick={click} className="fahrenhite"style={entered==="fahrenhite" ? {backgroundColor: "red"}: {backgroundColor: ""}}>Fahrenhite</button>
        </span>
    )
}
export default Button;