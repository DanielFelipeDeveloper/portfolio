import ScrollInto from 'react-scroll-into-view';

const NavLinks = [
  { "name": "About", "link": "about" },
  { "name": "Experience", "link": "experience" },
  { "name": "Work", "link": "work" },
  { "name": "Contact", "link": "contact" },
];

interface MenuProps {
  toggleMenu: () => void;
}

export function Menu({ toggleMenu }: MenuProps) {
  return (
      <nav 
        className="menu flex fixed top-0 right-0 px-2 w-[70vw] 
        max-w-sm max-h-screen h-screen z-10 bg-[#112240]"
      >
        <div className='w-full flex flex-col gap-10 text-center justify-center'>
          {NavLinks.map(item => (
              <ul key={item.name} className="">
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
      </nav>
  )
}