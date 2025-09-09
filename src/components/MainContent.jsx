import { Contact } from './Contact'
import { Experience } from './Experience'
import { Hero } from './Hero'
import { Projects } from './Projects/Projects'
import Certifications from './Certifications'

export const MainContent = () => {
    return <main className='fixed overflow-y-scroll overflow-x-hidden top-16 left-0 right-0 bottom-0 md:ml-56 md:mr-0 ml-0 mr-0'>
      <Hero />
      <Experience/>
      <Projects/>
      <Certifications/>
      <Contact/>
    </main>
}