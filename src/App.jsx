import { useState } from 'react'
import reactLogo from './assets/react.svg'
import senaLogo from './assets/logosena.svg'
import React from 'react';
import Saludo from './components/saludo';
import './App.css'

function App() {
  
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-[150px] mx-auto flex justify-center items-center p-4'>
        <a href="src/assets/logosena.svg" target="_blank">
          <img src={senaLogo} className="w-[80px] h-[80px] object-contain" alt="Vite logo" />
        </a>
        
      </div>
      <h1>Mi primera app con Vite y React</h1>
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
