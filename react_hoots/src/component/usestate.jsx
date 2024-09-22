import React from 'react'
import { useState } from 'react'
 const Usestate = () => {
    const [count, setCount] = useState('huzaifa');

    const changthis =()=>{
    let val=count;
     
    val==='huzaifa'? setCount('huzaifa welcon'):setCount('huzaifa');
  
    }
  return (
    <> 
    <h1>{count}</h1>
    <button onClick={changthis}>click</button>
  </>
  )
}
export default Usestate;