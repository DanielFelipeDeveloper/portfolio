"use client"
import { motion } from 'framer-motion';
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ScrollInto from "react-scroll-into-view";
import useScrollDirection from "../hooks/useScrollDirection";
import { Menu } from './Menu';
import { MenuToggle } from "./Menu/MenuToggle";
import { useDimensions } from "./Menu/use-dimensions";

export const NavLinks = [
  { "name": "About", "link": "about" },
  { "name": "Experience", "link": "experience" },
  { "name": "Work", "link": "work" },
  { "name": "Contact", "link": "contact" },
]

interface HeaderProps {
  toggleMenu: () => void;
  menuIsOpen: boolean;
}

export function Header({ toggleMenu, menuIsOpen }: HeaderProps) {
  const scrollDirection = useScrollDirection('down');
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const [scrolledToTop, setScrolledToTop] = useState(true);
  
  const headerDynamicClass =  scrollDirection === 'up' &&
  !scrolledToTop ? 'scroll-up' :  scrollDirection === 'down' &&
  !scrolledToTop && 'scroll-down';

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);

    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll("nav #navbar-default ul li");

    let currentSection: any;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.pageYOffset >= sectionTop - 400) {
        
        currentSection = section.getAttribute("id"); }
    });

    navLi.forEach((li) => {
      li.classList.remove("active");
      
      if (li.classList.contains(currentSection)) {
        li.classList.add("active");
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`header ${headerDynamicClass} flex justify-between items-center align-middle px-4 md:px-14`}>
      <Link href="/">
        <img src="/assets/logo.svg" alt="logo" className="h-9" />
      </Link>

      <motion.div 
        className="z-50 flex items-center"
        initial={false}
        animate={menuIsOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <MenuToggle toggle={toggleMenu}/>
      </motion.div>

      { menuIsOpen && <Menu toggleMenu={toggleMenu} /> }

      <div className="hidden w-full md:flex md:w-auto items-center" id="navbar-default">
        <div className="flex items-center gap-5">
          {NavLinks.map(item => (
            <ul key={item.name} className="p-0 m-0 list-none">
              <li
                className={`relative text-base ${item.link}`}
              >
                <ScrollInto 
                  selector={`#${item.link}`}
                  smooth
                  className="p-2 font-medium transition-all hover:text-sky-400 cursor-pointer"
                >
                  {item.name}
                </ScrollInto>
              </li>
            </ul>
          ))}
        </div>
        <a
          className="btn btn-sm flex items-center ml-6"
          href="/Resume.pdf"
          download="resume"
        >
          Resume
        </a>
      </div> 
    </nav>
  )
}