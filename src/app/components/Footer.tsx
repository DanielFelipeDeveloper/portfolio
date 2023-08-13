import { SocialList } from './Social'

export function Footer() {
  return (
    <div className="absolute bottom-6 flex w-full flex-col items-center justify-center">
      <ul className="mb-2 flex gap-6 md:hidden">
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
                  className="text-slate-400 transition-all hover:translate-y-[-2px] hover:text-accent"
                  size={22}
                />
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
