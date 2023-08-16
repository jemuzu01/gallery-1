import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeColor } from '../features/theme';

export const ChangeColor = () => {

  const [color, setColor] = useState("");

  const dispatch = useDispatch();

  return (
    <div>
        <input value={color} onChange={(event)=> setColor(event.target.value)} />  
        <button onClick={() => dispatch(changeColor(color) )}>Submit</button>
    </div>
  )
}
