import React, { useCallback, useState } from 'react'
import timer from './timer'
import timerfunction from './timerfunction';
const timercontainer = () => {
    const[show, setshow] = useState(true);
    const handlechange = () =>{
        setshow(!show)
    }
  return (
    <div>
        <button onClick={handlechange}>show click</button>
        {show && <timerfunction/> }
    </div>
  )
}

export default timercontainer