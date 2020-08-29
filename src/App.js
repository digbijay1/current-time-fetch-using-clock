import React, { useState } from 'react';
const App=()=>
{
  let newTime=new  Date().toLocaleTimeString();
  const [time,setCtime]=useState(newTime)
  const updateTime=()=>
  {
    newTime=new  Date().toLocaleTimeString();
    setCtime(newTime)
  }
  return(
    <>
    <h1>{time}</h1>
    <button onClick={updateTime}>set time</button>
    </>
  )
}

export default App;
