
import Button from './Button.jsx'
import Input_field from './Input_field'
import { useState } from 'react'
function Content() {
    let [called,setcalled] = useState("");
    let [input,setInput] = useState(0);
    let [flag,setflag] = useState(false);
    function user_input(event){
        let user=event.target.value;
        setInput((prev)=>{
            return user;
        })
    }

    function onclick(event){
        let category=event.target.className;
        setcalled((prev)=>{
            return category;
        })
    }
    function click(){
        setflag((prev)=>{
            return true;
        })
    }
    function display(){
        if(called === 'celsius'){
            return input == 0 ? null : <h1>Result : {Math.floor(input * 9/5 - 32)}</h1>
        }
        else if(called === 'fahrenhite'){
            return input == 0 ? null : <h1>Result : {Math.floor(input * 5/9 - 32)}</h1>
        }
        else{
            return null;
        }
    }
    return(
    <>
    <h1>Temperature Conversion</h1>
      <Button click={onclick} entered={called}/>
      <br /><br />
      <Input_field value={user_input} />
      <br /><br />
        <button onClick={click}>Submit</button>
        {flag == true ? display(): null}
    </>
    )
}

export default Content;