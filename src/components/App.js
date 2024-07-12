
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState("")
  return (
    <div>
      <label for='name'>Enter your name:</label>
        <input id="name" type="text" onChange={(e) => setName(e.target.value)}/>
        <p>Hello {name}!</p>
    </div>
  )
}

export default App
