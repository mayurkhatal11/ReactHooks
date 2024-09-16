import React from 'react'
import './App.css'
import { useState } from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';

function App() {

  const [value, SetValue] = useState(0);
  const count = useRef(0);
 
  useEffect(()=> {
    count.current = count.current + 1;
  });
  
  const inputElem = useRef();

  const btnClicked = () => {
    console.log(inputElem.current);
    inputElem.current.style.background = "blue";
  }
 
  return (
    <>
      <button onClick={() => {SetValue(prev => prev-1)}}>-1</button>
      <h1>{value}</h1>
      <button onClick={() => {SetValue(prev => prev+1)}}>+1</button>
      <h1>Render Count: {count.current} </h1>

      <input type="text"  ref={inputElem}/>
      <button onClick={btnClicked}>Click me!</button>
    </>
  )
}

export default App
