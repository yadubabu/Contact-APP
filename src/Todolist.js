import React from 'react';
import './style.css';

export const Todolist = ({todolist,deleteHandler}) => {
  return (
    <div>
       {todolist.map((todo,index)=>
            <div key={index}>
               <h5>{todo} &nbsp; <button className='del' onClick={()=>deleteHandler(index)}>Delete</button></h5> 
            </div>
       )}
    </div>
  )
}
