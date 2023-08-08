"use client"
// motion
import { motion } from 'framer-motion'
// variant
import Link from 'next/link'
import { fadeIn } from '../variants'

export function Work() {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn('right', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0 mt-auto"
          >
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Work.
              </h2>

              <p className="max-w-sm mb-24">
                See here some of my most recent works!
              </p>

              <Link href="/projects">
                <button className="btn btn-sm">View all projects</button>
              </Link>
            </div>

            <div className="group relative overflow-hidden border-2
            border-white/50 rounded-xl h-screen max-h-[280px]
            cursor-pointer">
              <a href="https://github.com/bredacoder/podcastr-next" target='_blank'>
                <div className="group-hover:bg-black/70 w-full h-full absolute
                z-40 transition-all duration-300"/>

                <img src="assets/podcastr-1.png" alt="image" className="object-cover w-full h-full group-hover:scale-125 transition-all duration-500"/>

                <div className="absolute -bottom-full left-12
                group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">Frontend Development</span>
                </div>

                <div className="absolute -bottom-full left-12
                group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">Podcastr</span>
                </div>

                <div className="absolute -bottom-full left-12
                group-hover:bottom-8 transition-all duration-700 z-50">
                  <span className="text-sm font-secondary font-medium text-slate-400">ReactJS · NextJS · Typescript · ContextAPI · Sass</span>
                </div>
              </a>
              
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10 mt-auto"
          >
            <div className="group relative overflow-hidden border-2
              border-white/50 rounded-xl h-screen max-h-[280px]">
                <a href="https://ignews-sigma-one.vercel.app/" target='_blank'>
                  <div className="group-hover:bg-black/70 w-full h-full absolute
                  z-40 transition-all duration-300"/>

                  <img src="assets/ig.news.png" alt="image" className="object-cover w-full h-full group-hover:scale-125 transition-all duration-500"/>

                  <div className="absolute -bottom-full left-12
                  group-hover:bottom-24 transition-all duration-500 z-50">
                    <span className="text-gradient">Frontend Development</span>
                  </div>

                  <div className="absolute -bottom-full left-12
                  group-hover:bottom-14 transition-all duration-700 z-50">
                    <span className="text-3xl text-white">ig.news</span>
                  </div>

                  <div className="absolute -bottom-full left-12
                  group-hover:bottom-8 transition-all duration-700 z-50">
                    <span className="text-sm font-secondary font-medium text-slate-400">ReactJS · NextJS · SASS · NextAuth · Prismic · Jest · FaunaDB · Stripe</span>
                  </div>
                </a>
            </div>

            <div className="group relative overflow-hidden border-2
            border-white/50 rounded-xl h-screen max-h-[280px]">
               <a href="https://github.com/bredacoder/ignite-reactjs-dashgo/" target='_blank'>
                  <div className="group-hover:bg-black/70 w-full h-full absolute
                  z-40 transition-all duration-300"/>

                  <img src="assets/dashgo.png" alt="image" className="object-cover w-full h-full group-hover:scale-125 transition-all duration-500"/>

                  <div className="absolute -bottom-full left-12
                  group-hover:bottom-24 transition-all duration-500 z-50">
                    <span className="text-gradient">Frontend Development</span>
                  </div>

                  <div className="absolute -bottom-full left-12
                  group-hover:bottom-14 transition-all duration-700 z-50">
                    <span className="text-3xl text-white">Dashgo</span>
                  </div>

                  <div className="absolute -bottom-full left-12
                  group-hover:bottom-8 transition-all duration-700 z-50">
                    <span className="text-sm font-secondary font-medium text-slate-400">ReactJS · NextJS · ChakraUI</span>
                  </div>
                </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}