import Image from 'next/image'
import Hero from './Components/hero'
import Aboutme from './Components/aboutme'
import Projects from './Components/projects'
import ContactUs from './Components/contactus'
import Footer from './Components/footer'

export default function Home() {
  return (
    <main className="">
       <div  id='Home'  >
       <Hero/>
       </div>
       <div  id='Aboutme'  >
        <Aboutme/>
       </div>
       <div  id='Projects'  >
        <Projects />
       </div>
       <div id='ContactUs' >
        <ContactUs/>
        </div>
        <Footer/>
    </main>
  )
}
