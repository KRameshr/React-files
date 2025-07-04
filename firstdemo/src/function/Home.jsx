import React from 'react'

const Home = ({myobj}) => {
  const  title  = 'My hOme page';
  const list = [ "R","s","m","d"]
  const empty = [ ]
  return (
    <div>
      <h2>Home</h2>
      <p>{title}</p>
      <ul>
        { list.length>0 ? <>    {list.map((val,ind)=>
        <li key={ind}>{val}</li>
        )} </> : <p>not found</p>}
    
      </ul>
      <p>{myobj.name} age {myobj.age} {myobj.address[1]}</p>
    </div>
  )
}

export default Home