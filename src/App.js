
import { useState } from 'react';
import './App.css';
import Stopwatch  from './components/Stopwatch';
import Timer from './components/Timer';
function App() {
  const[show , setShow] = useState(true);
  return (
    <div className='App'>
      {show ? <Stopwatch/> : <Timer/>}
      <button onClick={()=>setShow(!show)}>Show {show ? "Timer" : "StopWatch"}></button>

    </div>
  );
}

export default App;
