import { useState } from "react";
import { useEffect } from "react";
import JokeCard from "./JokeCard";
export default function Backend(){
    let [api_object,setapiobject]=useState({});
    useEffect(()=>{
        const fetch_data=async()=>{
            let url =  "https://official-joke-api.appspot.com/random_joke";
            let res=await fetch(url);
            let data= await res.json();
            let result={
                type: data.type,
                joke: data.setup
            }
            setapiobject((prev)=>{
                return result;
            })
        }
        fetch_data();
    })
    return <JokeCard api_data={api_object}/>
}