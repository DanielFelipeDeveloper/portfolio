'use client'
import { useEffect, useState } from "react";
import { About } from "./components/About";
import { Banner } from "./components/Banner";
import { Experiences } from "./components/Experiences";
import { Header } from "./components/Header";

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
        className={`${menuIsOpen && 'blur overflow-hidden max-h-screen h-full'}`}
      >
        <Banner />
        {/* <Nav /> */}
        <About />
        <Experiences />
        {/* <Work />
        <Contact /> */}
        {/* <div className="h-52"/> */}
      </div>
    </>
  )
}
