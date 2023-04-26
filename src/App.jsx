import { useState } from 'react'
import './App.css'
import Header from './shared/header/Header'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='lg:px-10'>
      <Header></Header>
      <div className='mt-20'>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default App
