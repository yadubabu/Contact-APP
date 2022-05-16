import React from "react";
import Counter from "./Counter";

const AddCounter=({value,onIncrement,onDecrement})=>(
    <button onClick={()=>(
        <div>
            <h3>{value}</h3>
       <button onClick={onIncrement}>+</button>&nbsp;&nbsp;
   <button onClick={onDecrement}>-</button>
     <hr/>
        </div>
    )}>AddCounter</button>
)

export default AddCounter;