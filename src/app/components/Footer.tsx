import { SocialList } from "./Social";


export function Footer() {
  return (
    <div className="absolute bottom-6 w-full flex flex-col items-center justify-center">
      <ul className="flex md:hidden gap-6 mb-2">
        {SocialList.map(item => {
          const { icon: Icon } = item;

          return (
            <li key={item.name}>
              <a 
                target="_blank" href={item.link} aria-label={item.name} rel="noreferrer"
              >
                <Icon title={item.name} className="text-slate-400 hover:text-accent transition-all hover:translate-y-[-2px]" size={22} />
              </a>
            </li>
          )
        })}
      </ul>

      <a
        href="https://github.com/bredacoder/portfolio"
        target="_blank"
        className="text-gradient-link btn-link cursor-pointer"
      >
        Developed by Daniel Breda
      </a>
    </div>
  )
}