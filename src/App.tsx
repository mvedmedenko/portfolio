import './App.css'
import Home from './sections/Home/Home'
import Skills from './sections/Skills/Skills'
import About from './sections/About/About'
import Portfolio from './sections/Portfolio/Portfolio'
import Contact from './sections/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div>
      <Home />
      <Skills />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
