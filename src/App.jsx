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
      <h1 className="ml-100 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 hover:scale-105 transition-transform transform">
  Mi primera app con Vite y React
</h1>
      
      
      
      <div className="card flex flex-col items-center gap-6 p-6">
        <div className='flex gap-4'>
        <button 
        onClick={() => setCount((count) => count + 1)} 
        className="px-6 py-3 bg-emerald-500 text-white font-semibold rounded-lg shadow-md hover:bg-emerald-600 transition-colors active:scale-95"
  >
    Incrementar (+)
    </button>
       
        <button 
        onClick={() => setCount((count) => count - 1)} 
        className="px-6 py-3 bg-rose-500 text-white font-semibold rounded-lg shadow-md hover:bg-rose-600 transition-colors active:scale-95"
        >
           
           Decrementar (-)
        </button>
        </div>
        
        <div className="text-xl font-mono font-bold text-gray-700">
    Count: {count}
  </div>
      
  <div>
    
    {/* Usa el componente como una etiqueta HTML */}
    
    <Saludo nombre="Juan Ramos" />
    
  </div>

</div>
      
    </>
  )
}

export default App
