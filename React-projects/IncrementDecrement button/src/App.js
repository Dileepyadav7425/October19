import { useState } from 'react'
import './App.css'

const App=()=>{

 const[getCount,setcount]=useState(0);

  const onIncrementHandler=()=>{
     setcount(getCount+1);
  }

  const onDecrementHandler=()=>{
    setcount(getCount-1);
  }
  
  
 


  return (<div className='container'>
    <div>
      <input type="text" value={getCount} readonly/>
    </div>
    <button onClick={onIncrementHandler}>INCREMENT</button>
    <button onClick={onDecrementHandler}>DECREMENT</button>
  </div>)
}
export default App;