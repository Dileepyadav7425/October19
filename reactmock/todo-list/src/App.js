import React,{useState} from "react"

function App(){
  const[activity,setActivity]=useState('')
  const[listData,setlistData]=useState([])

  function addActivity(i){
    setActivity('')
    setlistData([...listData,activity])
  }
  function removeActivity(i){
    const updatedList=listData.filter((elem)=>{
      return i!==elem;
    })
      setlistData(updatedList)
  }
  return(
    <>
    <input type="text" placeholder="Enterlist" value={activity} onChange={(e)=>setActivity
      (e.target.value)}/>
     <button onClick={addActivity}>Add</button>
     <div>
      {listData.map((i,index)=><ol>{index+1} {i} 
      <button onClick={()=>removeActivity(i)}>Remove</button></ol>)}
     </div>
    </>
  )
}
export default App;
