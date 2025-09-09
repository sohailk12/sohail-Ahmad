import './index.css'
import { Navbar } from './components/Navbar'
import { NavTop } from './components/NavTop'
import { MainContent } from './components/MainContent'
const App = () =>{
  return <div className='overflow-x-hidden absolute top-16 left-0 right-0 bottom-0 md:ml-56 md:mr-0 ml-0 mr-0 '>
      <NavTop />
      <Navbar />
      <MainContent />
      <div className="fixed inset-0 -z-10 h-full w-full bg-sky-200 bg-[linear-gradient(to_right,#b5e4ff_1px,transparent_1px),linear-gradient(to_bottom,#b5e4ff_1px,transparent_1px)]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_60%_450px,#fff,transparent)]"></div></div>
      </div>
    
}

export default App
