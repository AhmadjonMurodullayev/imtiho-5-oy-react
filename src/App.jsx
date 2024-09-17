import React from 'react'
import './index.css'
import { Footer, Header } from './layout'
import { Outlet } from 'react-router-dom'
const App = () => {
  return (
    <div>
    {/* <Header/> */}
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default App