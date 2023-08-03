'use client'
import { useEffect, useState } from "react";
import { About } from "./components/About";
import { Banner } from "./components/Banner";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Header } from "./components/Header";
import { Work } from "./components/Work";

export default function Home() {
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

  return (
    <>
      <Header menuIsOpen={menuIsOpen} toggleMenu={toggleMenu} />
      
      <div 
        className={`${menuIsOpen && 'blur overflow-hidden h-full'}`}
      >
        <Banner />
        <About />
        <Experience />
        <Work />
        <Contact />
      </div>
    </>
  )
}
