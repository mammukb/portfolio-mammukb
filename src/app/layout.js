import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './Components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Muhammed K B',
  description: 'Portfolio of Muhammed K B',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>  
          <Navbar className="w-full"  />    
        {children}     
        </body>
    </html>
  )
}
