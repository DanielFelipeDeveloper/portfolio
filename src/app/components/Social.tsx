import { FiGithub, FiLinkedin } from 'react-icons/fi'

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
]

export function Social() {
  return (
    <div
      className='fixed bottom-0 left-2 right-auto z-20 hidden w-10 items-center text-slate-400 after:mx-auto after:block
      after:h-28 after:w-[1px] after:bg-slate-400 after:content-[""] md:block
      lg:left-10'
    >
      <ul className="mb-10 flex flex-col items-center justify-center gap-6 text-center">
        {SocialList.map((item) => {
          const { icon: Icon } = item

          return (
            <li key={item.name}>
              <a
                target="_blank"
                href={item.link}
                aria-label={item.name}
                rel="noreferrer"
              >
                <Icon
                  title={item.name}
                  className="transition-all hover:translate-y-[-2px] hover:text-accent"
                  size={22}
                />
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
