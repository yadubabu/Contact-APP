
import React from "react";

  
 const Counter=({value,onIncrement,onDecrement})=>(
    <div>
    <h3>{value}</h3>
       <button onClick={onIncrement}>+</button>&nbsp;&nbsp;
   <button onClick={onDecrement}>-</button>
     <hr/>
     <button onClick={()=>(<Counter value={value} onIncrement={onIncrement} onDecrement={onDecrement}/>)}>AddCounter</button>
     </div>
   )
  
export default Counter;