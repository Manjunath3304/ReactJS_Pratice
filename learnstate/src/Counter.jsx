import React, { useState } from 'react'

export default function Counter() {
   
    const [count, setValue] = useState(0)
    const increase = ()=> setValue(count+1)
    const decrease = ()=> setValue(count-1)
    const reset = ()=> setValue(0)
  return (

    <div>
        <h1>{count}</h1>
        <button onClick={increase}>+</button>
        <br></br>
        <button onClick={decrease}>-</button>
        <br></br>
        <button onClick={reset}>Reset</button>
      
    </div>
  )
}
