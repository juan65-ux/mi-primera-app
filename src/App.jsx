import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import Saludo from './components/saludo';
import './App.css'

function App() {
  
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Mi primera app</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          count is {count}
        </button>
        <div>
    {/* Usa el componente como una etiqueta HTML */}
    <Saludo nombre="Juan Ramos" />
    
  </div>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
