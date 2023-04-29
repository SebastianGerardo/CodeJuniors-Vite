import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

const Home = () => {
  return (
    <div className="scroll-smooth">
      <div className='mx-auto max-w-7xl'>
        <Header />
      </div>

      <div className='mx-auto max-w-6xl'>
        <Outlet />
      </div>
    </div>
  )
}

export default Home
