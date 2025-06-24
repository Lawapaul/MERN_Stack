import {useState} from "react";
import { RandomNumber } from "./RandomNumber.jsx";
import {Check_Sum} from "./Check.jsx"
function Lottery({n,target_value}){
    let [ticket,setTicket] = useState(0);
    let [check,setCheck] = useState(false);
    function GenerateNumber(){
        let number = RandomNumber(n);
        Check_Sum(number,target_value) === true ? setCheck(true) : setCheck(false);
        setTicket(number);
    }
    return (
        <>  
        { check === true ? <h1>Lottery, Congratulations, you won!!</h1>: <h1>Lottery</h1>}
            <p>Lottery Ticket = {ticket}</p>
            <button onClick={()=>{
                GenerateNumber();
            }}>Get New Ticket</button>
        </>
    );
}
export default Lottery;