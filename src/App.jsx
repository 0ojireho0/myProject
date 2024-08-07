import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import Resume from './Pages/Resume'
import Footer from "./Pages/Footer" 

function App() {

  return (
    <>
    <Navbar />
    <Home />
    <About />
    <Projects />
    <Resume />
    <Contact />
    <Footer />

    </>
  )
}

export default App
