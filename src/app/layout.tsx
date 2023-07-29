'use client'
import { Aldrich, Orbitron, Rajdhani } from 'next/font/google';
import { ReactNode } from 'react';
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

  const fonts = `${orbitron.variable} ${rajdhani.variable} ${aldrich.variable}`;

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="" />
      </head>
      
      <body 
        className={`${fonts}`}
      >
        {children}
      </body>
    </html>
  )
}
