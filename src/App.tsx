import React from 'react'
import AboutMeSection from './components/AboutMeSection'
import Footer from './components/Footer'
import { Navbar } from './components/Navbar'
import Project from './components/Project'
import { useEffect, useState } from 'react'
import { projects } from './data'

function App() {
  const [imgsLoaded, setImgsLoaded] = useState(false)
  useEffect(() => {
    const loadImage = (image: string) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image()
        loadImg.src = image
        loadImg.onload = () => resolve(image)

        loadImg.onerror = (err) => reject(err)
      })
    }

    const IMAGES = Object.values(projects)
      .filter((project) => project.iPhonePreview)
      .map((project) =>
        project.features.map((feature) => [feature.ipPhoto, feature.mbPhoto])
      )
      .flat(3)

    Promise.all(IMAGES.map((image) => image && loadImage(image)))
      .then(() => setImgsLoaded(true))
      .catch((err) => console.log('Failed to load images', err))
  }, [])
  return (
    <div className='App'>
      <div className='mx-auto flex flex-col px-4 xl:max-w-6xl xl:p-0 '>
        <Navbar />
        {imgsLoaded ? (
          <main className='flex flex-col space-y-4'>
            <AboutMeSection />
            <Project project={projects.jobFinder} />
            <Project project={projects.logicGatesSimulator} />
            <Project project={projects.kanban} />
            <Project project={projects.extinguisherManagementSystem} />
          </main>
        ) : null}

        <Footer />
      </div>
    </div>
  )
}

export default App
