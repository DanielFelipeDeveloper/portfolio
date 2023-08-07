import { FiGithub, FiLinkedin } from "react-icons/fi";

export const SocialList = [
  {
    name: 'Github',
    link: 'https://github.com/bredacoder',
    icon: FiGithub,
  },
  {
    name: 'Linkedin',
    link: 'https://linkedin.com/in/bredacoder',
    icon: FiLinkedin,
  },
];

export function Social() {
  return (
    <div
      className='hidden md:block fixed items-center w-10 bottom-0 left-2 lg:left-10 right-auto z-20 text-slate-400
      after:content-[""] after:block after:w-[1px] after:h-28 after:bg-slate-400
      after:mx-auto'
    >
      <ul className='flex mb-10 flex-col gap-6 text-center items-center justify-center'>
        {SocialList.map(item => {
          const { icon: Icon } = item;

          return (
            <li key={item.name}>
              <a 
                target="_blank" href={item.link} aria-label={item.name} rel="noreferrer"
              >
                <Icon title={item.name} className="hover:text-accent transition-all hover:translate-y-[-2px]" size={22} />
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}