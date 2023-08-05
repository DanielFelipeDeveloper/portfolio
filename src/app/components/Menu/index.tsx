import { AnimatePresence } from "framer-motion";
import ScrollInto from "react-scroll-into-view";
import { NavLinks } from "../Header";

interface MenuProps {
  toggleMenu: () => void;
}

export const Menu = ({ toggleMenu }: MenuProps) => {
  return (
    <AnimatePresence>
    <aside 
          className="menu flex fixed top-0 right-0 w-[70vw]
          max-w-sm h-[calc(100vh+6rem)] z-10 bg-[#112240]"
        >
          <div 
            className='w-full flex flex-col gap-10 text-center justify-center'
          >
            {NavLinks.map(item => (
                <ul key={item.name}>
                  <li
                    className="text-2xl"
                  >
                    <ScrollInto
                      selector={`#${item.link}`}
                      className="p-2 font-medium transition-all hover:text-sky-400 cursor-pointer"
                      smooth
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </ScrollInto>
                  </li>
                </ul>
            ))}
            
            <a
              className="btn btn-lg flex justify-center items-center mx-auto"
              href="/Resume.pdf"
              download="resume"
            >
              Resume
            </a>
          </div>
        </aside>
    </AnimatePresence>
  )
};
