'use client'
import { Aldrich, Orbitron, Rajdhani } from 'next/font/google';
import { ReactNode, useEffect, useState } from 'react';
import { Email } from './components/Email';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Social } from './components/Social';
import './globals.css';

const orbitron = Orbitron({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--orbitron', 
})
const rajdhani = Rajdhani({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--rajdhani' 
})
const aldrich = Aldrich({ 
  subsets: ['latin'], 
  weight: '400',
  variable: '--aldrich'
})

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => setMenuIsOpen(!menuIsOpen);

  const handleResize = (e: UIEvent) => {
    const w = e.currentTarget as Window;

    if (w.innerWidth > 768) {
      setMenuIsOpen(false);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  })

  const fonts = `${orbitron.variable} ${rajdhani.variable} ${aldrich.variable}`;

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>Daniel Breda</title>
      </head>
      
      <body 
        className={`relative ${fonts} min-h-screen`}
      >
        <Header menuIsOpen={menuIsOpen} toggleMenu={toggleMenu} />
      
        <div 
          className={`${menuIsOpen && 'blur overflow-hidden h-full'}`}
        >
          {children}
        </div>

        <Social />
        <Email />
        <Footer />
      </body>
    </html>
  )
}
