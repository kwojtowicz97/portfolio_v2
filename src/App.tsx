import React from 'react'
import AboutMeSection from './components/AboutMeSection'
import Footer from './components/Footer'
import { Navbar } from './components/Navbar'
import Project from './components/Project'
import { projects } from './data'

function App() {
  return (
    <div className='App'>
      <div className='mx-auto flex flex-col px-4 xl:max-w-6xl xl:p-0 '>
        <Navbar />
        <main className='flex flex-col space-y-4'>
          <AboutMeSection />
          <Project project={projects.jobFinder} />
          <Project project={projects.logicGatesSimulator} />
          <Project project={projects.kanban} />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
