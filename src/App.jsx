import { useState } from 'react'

import './App.css'

function App() {
  const[color, setColor] = useState("black") 

  return (
    <>
      <div className="background"
      style = {{backgroundColor: color}}>
        <div className="color-pallete">
          <button 
          onClick = {() => setColor("Red")}
          className = "btn">Red</button>
          <button 
          onClick = {() => setColor("Green")}
          className = "btn">Green</button>
          <button 
          onClick = {() => setColor("Blue")}
          className = "btn">Blue</button>
          <button 
          onClick = {() => setColor("Pink")}
          className = "btn">Pink</button>
        </div>
      </div>
      
    </>
  )
}

export default App
