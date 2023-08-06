export function Email() {
  return (
    <div
      className='hidden md:block fixed items-center text-center w-10 bottom-0 right-2 lg:right-10 left-auto z-20 text-slate-400
      after:content-[""] after:block after:w-[1px] after:h-28 after:bg-slate-400
      after:mx-auto'
    >
      <a href="mailto:bredacoder@gmail.com" className="text-sm mb-5 font-primary [writing-mode:vertical-lr] hover:text-accent transition-all hover:translate-y-[-2px]">
        bredacoder@gmail.com
      </a>
    </div>
  )
}