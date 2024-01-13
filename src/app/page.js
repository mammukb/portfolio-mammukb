import Image from 'next/image'
import Hero from './Components/hero'
import Aboutme from './Components/aboutme'
import Projects from './Components/projects'

export default function Home() {
  return (
    <main className="">
       <div  id='Home'  >
       <Hero/>
       </div>
       <div  id='Aboutme'  >
        <Aboutme/>
       </div>
       <div  id='Aboutme'  >
        <Projects />
       </div>
    </main>
  )
}
