import StopWatch from './StopWatch'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  let [count,setcount] = useState(0);
  let [flag,setflag] = useState(false);
  useEffect(()=>{
      let count_id;
      if(flag){
        count_id = setInterval(()=>{
          setcount((prev)=>{
            return prev+1;
          });
        },1000)
      }
      return ()=>  clearInterval(count_id);
  },[flag]);

  function handlestart(){
    setflag(true);
  }
  function handlepause(){
    setflag(false);
  }
  function reset(){
    setflag(false);
    setcount(0);
  }
  return (
    <>
      <h1>{count}</h1>
      <br /><br />
      <button onClick={handlestart}>Start</button>
      &nbsp; &nbsp;
      <button onClick={handlepause}>Pause</button>
      &nbsp; &nbsp;
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default App
