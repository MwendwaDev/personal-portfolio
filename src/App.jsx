import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg';
import Header from "./components/Header"
import Banner from "./components/Banner"
import ProjectsSection from "./components/ProjectsSection"
import Actualwriting from "./components/Actualwriting"
import Contact from './components/Contact'

function App() {
  
  return (
    <>
      <div className="bg-[#587548]  w-screen min-h-screen max-w-[100%] overflow-hidden">
        <Header />
        <Banner />
        <ProjectsSection />
        <Actualwriting />
        <Contact />
        
        </div>
    </>
  )
}

export default App
