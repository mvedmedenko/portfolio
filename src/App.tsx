import './App.css'
import Home from './sections/Home/Home'
import Skills from './sections/Skills/Skills'
import About from './sections/About/About'
import Portfolio from './sections/Portfolio/Portfolio'
import Contact from './sections/Contact/Contact'
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import Privacy from './components/Privacy/Privacy'

function App() {

  const [isPrivacy, setIsPrivacy] = useState<boolean>(false)


  return (
    <div className={!isPrivacy ? "app" : "scroll_off"}>
      {isPrivacy && <Privacy setIsPrivacy={setIsPrivacy}/>}
      <Home isPrivacy={isPrivacy}/>
      <Skills />
      <About />
      <Portfolio />
      <Contact />
      <Footer setIsPrivacy={setIsPrivacy}/>
    </div>
  )
}

export default App
