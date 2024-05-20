'use client'
import { Aldrich, Orbitron, Inter } from 'next/font/google'
import { ReactNode, useEffect, useState } from 'react'
import { Email } from './components/Email'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Social } from './components/Social'
import './globals.css'

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--orbitron',
})
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--inter',
})
const aldrich = Aldrich({
  subsets: ['latin'],
  weight: '400',
  variable: '--aldrich',
})

export default function RootLayout({ children }: { children: ReactNode }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const toggleMenu = () => setMenuIsOpen(!menuIsOpen)

  const handleResize = (e: UIEvent) => {
    const w = e.currentTarget as Window

    if (w.innerWidth > 768) {
      setMenuIsOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  const fonts = `${orbitron.variable} ${inter.variable} ${aldrich.variable}`

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>Daniel Breda</title>
      </head>

      <body className={`${fonts}`}>
        <Header menuIsOpen={menuIsOpen} toggleMenu={toggleMenu} />

        <div className={`${menuIsOpen ? 'h-full overflow-hidden blur' : ''}`}>
          {children}
        </div>

        <Social />
        <Email />
        <Footer />
      </body>
    </html>
  )
}
