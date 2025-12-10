import { useEffect } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';
import ScrollTopBtn from './components/ScrollTopBtn';
import Skills from './components/Skills';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Education from './components/Education';
// import Training from './components/Training';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true, });
  }, []);
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Education/>
      {/* <Training/> */}
      <Resume/>
      <Contact/>
      <Footer/>
      <ScrollTopBtn/>
    </>
  );
}

export default App;
