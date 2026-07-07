import Seo from './components/Seo'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Seo
        title="Love Basnet Chhatri | Front-End Developer (React)"
        description="Love Basnet Chhatri is a front-end developer specializing in React and modern JavaScript, building responsive, accessible web applications."
      />
      <div className="mesh-bg" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
