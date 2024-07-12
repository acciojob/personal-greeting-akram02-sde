
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState("")
  return (
    <div>
        <input type="text" onChange={(e) => setName(e.target.value)}/>
        <p>{name}</p>
    </div>
  )
}

export default App
