import React from 'react' 
import './App.css'
import { useState } from 'react'
import { useMemo } from 'react';

function App() {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  function cubeNum(num) {
    console.log("Calculations done!");
    return Math.pow(num, 3);    
  }

  const result = useMemo(()=> {return cubeNum(number)}, [number])

  return (
    <>
    <input type="text" value={number} onChange={(e)=> {setNumber(e.target.value)}}/>
    <h3>Cube of a number is : {result}</h3>
    <button onClick={()=>{setCounter(counter+1)}}>Counter++</button>
    <h3>Counter: {counter}</h3>      
    </>
  )
}

export default App
