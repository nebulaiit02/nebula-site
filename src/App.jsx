import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ProductPage from './Pages/Product/productpage';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="App">
      <ProductPage />
    </div>
      
    </>
  )
}

export default App
