import React from 'react'
import AboutMeSection from './components/AboutMeSection'
import Footer from './components/Footer'
import { Navbar } from './components/Navbar'
import Project from './components/Project'
import { projects } from './data'

function App() {
  return (
    <div className='App'>
      <div className='mx-auto flex flex-col space-y-4 p-0 xl:max-w-6xl'>
        <Navbar />
        <div className='flex flex-col space-y-4'>
          <AboutMeSection />
          <Project project={projects.jobFinder} />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App