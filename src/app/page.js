import Image from 'next/image'
import Hero from './Components/hero'
import Works from './Components/works'
import Projects from './Components/projects'
import ContactUs from './Components/contactus'
import Footer from './Components/footer'

export default function Home() {
  return (
    <main className="">
       <div  id='Home'  >
       <Hero/>
       </div>
       <div  id='works'  >
        <Works/>
       </div>
       <div id='ContactUs' >
        <ContactUs/>
        </div>
        <Footer/>
    </main>
  )
}
