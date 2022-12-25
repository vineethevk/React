import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Form } from './Components/Form'
import { Routes, Route } from "react-router-dom"
import { Counter } from './Components/Counter'
import { Navbar } from './Components/Navbar'

function App() {
  const [input, setInput] = useState("")

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>}></Route>
        <Route path={"/form"} element={<Form />}></Route>
        <Route path='/counter' element={<Counter />}></Route>

      </Routes>
    </div>
  )
}

export default App
