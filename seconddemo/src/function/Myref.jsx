import React, { useEffect, useRef } from 'react'


const Myref = () => {
    const inputref = useRef(null);
    useEffect(()=>{
        inputref.current.focus();
    },[])
    const mydate= () =>{
        let name = inputref.current.value;
        if( name != ''){
            alert("welcomr  "  + name)
        }
        else{
            alert("please fill blank field")
        }
    }
  return (
    <div>
        <div className='form-group'>
            <label>Enter a Name:</label>
            <input type='text' className='form-control' ref={inputref}/>
        </div>
        <input type='button'value="click" className='btn btn-success' onClick={mydate}/>
    </div>

  )
}

export default Myref