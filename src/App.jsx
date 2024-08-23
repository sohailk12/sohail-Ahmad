import './index.css'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects/Projects'
import Certifications from './components/Certifications'
import { Navbar } from './components/Navbar'

const App = () =>{
  return (
    <>
      <Navbar />
      <Hero />
      <Experience/>
      <Projects/>
      <Certifications/>
      <Contact/>
      <div className="fixed inset-0 -z-10 h-full w-full bg-sky-200 bg-[linear-gradient(to_right,#b5e4ff_1px,transparent_1px),linear-gradient(to_bottom,#b5e4ff_1px,transparent_1px)]"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_60%_450px,#fff,transparent)]"></div></div>
    </>
  )
}

export default App
