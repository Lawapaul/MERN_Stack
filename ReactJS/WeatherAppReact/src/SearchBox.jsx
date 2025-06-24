import { useState } from "react"
import WeatherBox from "./WeatherBox";
import InfoBox from "./Infobox";
export default function SearchBox(){
    let [city,setcity] = useState("");
    let [transfer,settransfer]=useState("");
    function handleinput(event){
        setcity(event.target.value);
    }
    function submit(event){
        event.preventDefault();
        settransfer(city);
        {document.querySelector(".card").style.display='block'}
        setcity("");
    }
    return(
        <>
        <h1>Weather Application</h1>
        <input placeholder="Enter City" style={{width: "300px", height: "50px",paddingLeft: "10px"}} value={city} onChange={handleinput}></input>
        <br /><br />
        <button onClick={submit}>Submit</button>
        <br /><br />
        <WeatherBox city={transfer}/>
        </>
    )
}