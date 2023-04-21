import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './pages/components/Header'

const Home = () => {
  return (
    <div>
      
      <Header />

      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Home
