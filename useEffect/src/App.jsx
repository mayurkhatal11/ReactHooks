import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  
  const [Counter1, setCounter1] = useState(0);
  const [Counter2, setCounter2] = useState(0);

  const incrementCounter1=()=> {
    setCounter1(Counter1+1);
    // console.log("rendered1")
  }

  const incrementCounter2=()=> {
    setCounter2(Counter2+1);
    // console.log("rendered2")
  }

  useEffect(()=> {
    console.log("rendered")
  }, [Counter1])


  return (
    <>
      <h1>{Counter1}</h1>
      <button onClick={incrementCounter1}>Increment Counter1</button>
      <h1>{Counter2}</h1>
      <button onClick={incrementCounter2}>Increment Counter2</button>
    </>
  )
}

export default App
