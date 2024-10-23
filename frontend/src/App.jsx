import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Add from './components/Add'
import Home from './components/Home'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <>
      <Nav />
      <br />
      <br />
      <Routes>
      <Route path = '/' element = {<Login/>}></Route>
      <Route path = '/home' element = {<Home/>}></Route>
      <Route path='/add' element={<Add/>}></Route>
    
      
     </Routes>
      
    </>
  )
}

export default App
