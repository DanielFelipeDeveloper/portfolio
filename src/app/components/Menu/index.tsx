import { AnimatePresence } from 'framer-motion'
import ScrollInto from 'react-scroll-into-view'
import { NavLinks } from '../Header'

interface MenuProps {
  toggleMenu: () => void
}

export const Menu = ({ toggleMenu }: MenuProps) => {
  return (
    <AnimatePresence>
      <aside
        className="menu fixed right-0 top-0 z-10 flex
          h-[calc(100vh+6rem)] w-[70vw] max-w-sm bg-[#112240]"
      >
        <div className="flex w-full flex-col justify-center gap-10 text-center">
          {NavLinks.map((item) => (
            <ul key={item.name}>
              <li className="text-2xl">
                <ScrollInto
                  selector={`#${item.link}`}
                  className="cursor-pointer p-2 font-medium transition-all hover:text-sky-400"
                  smooth
                  onClick={toggleMenu}
                >
                  {item.name}
                </ScrollInto>
              </li>
            </ul>
          ))}

          <a
            className="btn btn-lg mx-auto flex items-center justify-center"
            href="/Resume.pdf"
            download="resume"
          >
            Resume
          </a>
        </div>
      </aside>
    </AnimatePresence>
  )
}
