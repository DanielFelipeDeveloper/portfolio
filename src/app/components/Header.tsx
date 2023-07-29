"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { Link as ScrollLink } from 'react-scroll';
import useScrollDirection from "../hooks/useScrollDirection";
import { Menu } from "./Menu";

const NavLinks = [
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
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const headerDynamicClass =  scrollDirection === 'up' &&
  !scrolledToTop ? 'scroll-up' :  scrollDirection === 'down' &&
  !scrolledToTop && 'scroll-down'

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`header ${headerDynamicClass} flex justify-between items-center px-4 md:px-14`}>
      <Link href="/">
        <img src="/assets/logo.svg" alt="logo" className="h-9" />
      </Link>

      { menuIsOpen && <Menu /> }

      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="md:hidden focus:outline-none z-20"
        aria-controls="navbar-default"
        aria-expanded="false"
        onClick={toggleMenu}
      >
        <span className="sr-only">Open main menu</span>
        {menuIsOpen ? <AiOutlineClose size={36} color="#38bdf8" /> : <BiMenuAltRight size={40} color="#38bdf8" /> }
      </button>

      <div className="hidden w-full md:flex md:w-auto items-center" id="navbar-default">
        <div className="flex items-center gap-5">
          {NavLinks.map(item => (
            <ul key={item.name} className="p-0 m-0 list-none">
              <li
                className="relative text-base"
              >
                <ScrollLink
                  smooth
                  spy
                  to={item.link}
                  className="p-2 font-medium transition-all hover:text-sky-400 cursor-pointer"
                >
                  {item.name}
                </ScrollLink>
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
    </div>
  )
}