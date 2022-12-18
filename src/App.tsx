import React from 'react'
import AboutMeSection from './components/AboutMeSection'
import Footer from './components/Footer'
import { Navbar } from './components/Navbar'
import ProjectDescription from './components/ProjectDescription'
import ProjectsSection from './components/ProjectsSection'

function App() {
  return (
    <div className='App'>
      <div className='mx-auto flex flex-col space-y-4 p-0 xl:max-w-6xl'>
        <Navbar />
        <div className='flex flex-col space-y-4'>
          <AboutMeSection />
          <ProjectDescription />
          <ProjectsSection />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
