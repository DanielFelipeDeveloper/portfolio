import { Link as ScrollLink } from 'react-scroll';

const NavLinks = [
  { "name": "About", "link": "about" },
  { "name": "Experience", "link": "experience" },
  { "name": "Work", "link": "work" },
  { "name": "Contact", "link": "contact" },
];

export function Menu() {
  return (
      <nav 
        className="menu flex fixed top-0 bottom-0 right-0 py-12 px-2 w-[70vw] 
        max-w-sm h-screen z-10 bg-[#112240] translate-x-[0vw]"
      >
        <div className='w-full flex flex-col gap-10 text-center justify-center'>
          {NavLinks.map(item => (
              <ul key={item.name} className="">
                <li
                  className="text-2xl"
                >
                  <ScrollLink
                    smooth
                    spy
                    to={item.link}
                    className="font-medium transition-all hover:text-sky-400 cursor-pointer"
                  >
                    {item.name}
                  </ScrollLink>
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