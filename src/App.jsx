import { useState } from 'react'
import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import {About } from './components/About/About'
import { Education } from './components/Education/Education'
import { Experience } from './components/Experience/Experience'
import { Activities } from './components/Activities/Activities'
import { Projects } from './components/Projects/Projects'
import { Footer } from './components/Footer/Footer'

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Education/>
        <Experience/>
        <Activities/>
        <Projects/>
        <Footer/>
      </div>
    </>
  )
}

export default App
