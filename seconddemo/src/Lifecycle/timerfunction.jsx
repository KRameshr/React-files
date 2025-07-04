import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react'

const timerfunction = () => {
    const [data, setdata] = useState(new Date());
    useEffect(()=> {
        // component update
        console.log('component did mount')
        const timerID = setInterval(() => {
            setdata(new data());
        }, 1000);

        return() =>{
            // compounet Un mount
            console.log("component-unmount")
            clearInterval(timerID);
        }
        // [] depandeciea are not declare then will call one times 
    },[])
    useEffect(()=> {
        console('component - update')
          // [] depandeciea are not declare then will call multipule times 
    },[data])

    // In this example, the  date state variable 
    // is included in the dependency array, 
    // so the useEffect callback function 
    // will execute when the component is rendered 
    // for the first time, and then again whenever the date state is updated.
    
  return (
    <div>
        <p>time: {data.toLocaleDateString()}</p>
    </div>
  )
}

export default timerfunction