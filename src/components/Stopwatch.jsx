import React,{useEffect , useState} from 'react'

const Stopwatch = () => {
    const [ time ,setTime] = useState(0);
    const [timer , setTimer]    = useState(false);
 
   useEffect(()=> {
      if(timer){
        var id = setInterval(()=>{
            setTime((prevValue)=>prevValue+10)
        },10)
    }
        return ()=>{
            clearInterval(id)
        }
   },[timer]);

   const handleStart = () =>{
    setTimer(true)
   }
   const handleStop = () =>{
    setTimer(false)
   }
   const handleReset = () =>{
    setTime(0)
    setTimer(false)
   }



   return (
    <div >
      <h1>StopWatch</h1>
      <div>
      <span>{("0"+ Math.floor((time/600000)%60)).slice(-2)} h :</span>
                <span>{("0"+ Math.floor((time/60000)%60)).slice(-2)} m :</span>
                <span>{("0"+ Math.floor((time/1000)%60)).slice(-2)} s :</span>
                <span>{("0"+Math.floor((time/10)%60)).slice(-2)} ms</span>

      </div>
      <div>
      <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}

export default Stopwatch
