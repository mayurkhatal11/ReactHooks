import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [car, setCar] = useState({
    brand: "Ferrai",
    color: "red",
    model: "Roma",
    year: "2023"
  });

  const changeColor =() => {
    setCar((prev) => {
      return {...prev, color: "blue"}
    })
  }

  return (
    <>
     <h1>My {car.brand}</h1>
     <p>It is a {car.color} {car.model} from {car.year}</p>
     <button onClick={changeColor}>Blue</button>
    </>
  )
}

export default App
