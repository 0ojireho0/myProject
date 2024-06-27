import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'

function App() {

  return (
    <>
    <Navbar />
    <Home />
    <About />
    <Projects />
    <Contact />
    </>
  )
}

export default App
