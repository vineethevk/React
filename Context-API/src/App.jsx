import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { CartContextProvider } from './contexts/cartContext'
import { Card } from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <CartContextProvider>
      <div className="App">
        <Card />
      </div>
    </CartContextProvider>
  )
}

export default App
