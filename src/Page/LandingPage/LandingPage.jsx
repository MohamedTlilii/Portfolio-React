import Header from "../../Components/Header/Header"
import Hero from "../../Components/Hero/Hero"
import About from '../../Components/About/About';
import Skills from '../../Components/Skills/Skills';
import Resume from '../../Components/Resume/Resume';
import Portfolio from '../../Components/Portfolio/Portfolio';
import Services from '../../Components/Service/Services';
import Contact from '../../Components/Contact/Contact';
import { useLocation } from 'react-router-dom';
import { useEffect } from "react";

function LandingPage() {
    const {hash}=useLocation();
useEffect(()=>{
 console.log(hash);
 if(hash){
     const div = hash.slice(1)
     document.getElementById(div)
     .scrollIntoView({behavior:'smooth',block:'start'})
 }
     },[hash])



  return (
    <div>
      <Hero    />
      <About />
      <Skills />
      <Resume />
      <Portfolio />
      <Services />
      <Contact />
    </div>
  )
}

export default LandingPage;
