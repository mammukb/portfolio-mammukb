import Image from 'next/image'
import Hero from './Components/hero'
import Aboutme from './Components/aboutme'

export default function Home() {
  return (
    <main className="">
       <div  id='Home'  >
       <Hero/>
       </div>
       <div  id='Aboutme'  >
        <Aboutme/>
       </div>
    </main>
  )
}
