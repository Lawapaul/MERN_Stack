import { useEffect, useState } from "react";
import InfoBox from "./Infobox";
export default function WeatherBox({city}){
    let [citydata,setcitydata]= useState({});
    useEffect(()=>{
        const weather= async ()=>{
            try{
                let url="https://api.openweathermap.org/data/2.5/weather?q="
                let apikey="&units=metric&appid=4a38c099645773e0279a3dfcd6777ab7";
                let res= await fetch(url + city + apikey);
                let data= await res.json();
                let object={
                    name: data.name,
                    temperature: data.main.temp,
                    min: data.main.temp_min,
                    max: data.main.temp_max,
                    humidity: data.main.humidity,
                    description: data.weather[0].description
                }
                console.log(data);
                setcitydata((prev)=>{
                    return object;
                })
            }
            catch(e){
                return <h1>Error Encountered! Try Again.</h1>
            }
            
        }
        weather();  
    },[city]);
    return <InfoBox result={citydata}/>
}