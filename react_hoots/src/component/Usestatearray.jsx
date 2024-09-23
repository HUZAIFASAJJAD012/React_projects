import React, { useState } from 'react'

export const Usestatearray = () => {
    const student=[
        {id:0,Name:'huzaifa',age:24},

        {id:2,Name:'ali',age:34},

        {id:3,Name:'mubarek',age:54},

        {id:4,Name:'hassan',age:24}
    ]
const [Data, setData] = useState(student);

const removedata=()=>{

setData([]);

}

  return (
    <div>
        
{
    Data.map((index)=> (
    <div key={index.id}>
       <h1>{index.Name}</h1> 
       <h1>{index.age}</h1> 
   
   </div>
    
     ) )



}
<button onClick={removedata}>clear</button>

    </div>
  )
}
