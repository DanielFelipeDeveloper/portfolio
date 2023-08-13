export function Email() {
  return (
    <div
      className='fixed bottom-0 left-auto right-2 z-20 hidden w-10 items-center text-center text-slate-400 after:mx-auto after:block
      after:h-28 after:w-[1px] after:bg-slate-400 after:content-[""] md:block
      lg:right-10'
    >
      <a
        href="mailto:bredacoder@gmail.com"
        className="mb-5 font-primary text-sm transition-all [writing-mode:vertical-lr] hover:translate-y-[-2px] hover:text-accent"
      >
        bredacoder@gmail.com
      </a>
    </div>
  )
}
