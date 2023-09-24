'use client'
// motion
import { motion } from 'framer-motion'
// variant
import Image from 'next/image'
import Link from 'next/link'
import { fadeIn } from '../variants'

export function Work() {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col gap-x-10 lg:flex-row">
          <motion.div
            variants={fadeIn('right', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="mb-10 mt-auto flex flex-1 flex-col gap-y-12 lg:mb-0"
          >
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Work.
              </h2>

              <p className="mb-24 max-w-sm">
                See here some of my most recent works!
              </p>

              <Link href="/projects">
                <button className="btn btn-sm">View all projects</button>
              </Link>
            </div>

            <div
              className="group relative h-screen max-h-[280px]
            cursor-pointer overflow-hidden rounded-xl border-2
            border-white/50"
            >
              <a
                href="https://github.com/bredacoder/podcastr-next"
                target="_blank"
              >
                <div
                  className="absolute z-40 h-full w-full
                transition-all duration-300 group-hover:bg-black/70"
                />

                <div className="relative h-full w-full object-cover transition-all duration-500 group-hover:scale-125">
                  <Image
                    className="object-cover"
                    src="/assets/podcastr-1.png"
                    alt="image"
                    fill
                  />
                </div>

                <div
                  className="absolute -bottom-full left-12
                z-50 transition-all duration-500 group-hover:bottom-24"
                >
                  <span className="text-gradient">Frontend Development</span>
                </div>

                <div
                  className="absolute -bottom-full left-12
                z-50 transition-all duration-700 group-hover:bottom-14"
                >
                  <span className="text-3xl text-white">Podcastr</span>
                </div>

                <div
                  className="absolute -bottom-full left-12
                z-50 transition-all duration-700 group-hover:bottom-8"
                >
                  <span className="font-secondary text-sm font-medium text-slate-400">
                    ReactJS · NextJS · Typescript · ContextAPI · Sass
                  </span>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="mt-auto flex flex-1 flex-col gap-y-10"
          >
            <div
              className="group relative h-screen max-h-[280px]
              overflow-hidden rounded-xl border-2 border-white/50"
            >
              <a href="https://ignews-sigma-one.vercel.app/" target="_blank">
                <div
                  className="absolute z-40 h-full w-full
                  transition-all duration-300 group-hover:bg-black/70"
                />

                <div className="relative h-full w-full object-cover transition-all duration-500 group-hover:scale-125">
                  <Image
                    src="/assets/ig.news.png"
                    alt="image"
                    fill
                    className="object-cover"
                  />
                </div>
                <div
                  className="absolute -bottom-full left-12
                  z-50 transition-all duration-500 group-hover:bottom-24"
                >
                  <span className="text-gradient">Frontend Development</span>
                </div>

                <div
                  className="absolute -bottom-full left-12
                  z-50 transition-all duration-700 group-hover:bottom-14"
                >
                  <span className="text-3xl text-white">ig.news</span>
                </div>

                <div
                  className="absolute -bottom-full left-12
                  z-50 transition-all duration-700 group-hover:bottom-8"
                >
                  <span className="font-secondary text-sm font-medium text-slate-400">
                    ReactJS · NextJS · SASS · NextAuth · Prismic · Stripe
                  </span>
                </div>
              </a>
            </div>

            <div
              className="group relative h-screen max-h-[280px]
            overflow-hidden rounded-xl border-2 border-white/50"
            >
              <a
                href="https://ecommerce-shopify-bredacoder.vercel.app/"
                target="_blank"
              >
                <div
                  className="absolute z-40 h-full w-full
                  transition-all duration-300 group-hover:bg-black/70"
                />

                <div className="relative h-full w-full object-cover transition-all duration-500 group-hover:scale-125">
                  <Image
                    src="/assets/digital-design.png"
                    alt="image"
                    className="object-cover"
                    fill
                  />
                </div>

                <div
                  className="absolute -bottom-full left-12
                  z-50 transition-all duration-500 group-hover:bottom-24"
                >
                  <span className="text-gradient">Frontend Development</span>
                </div>

                <div
                  className="absolute -bottom-full left-12
                  z-50 transition-all duration-700 group-hover:bottom-14"
                >
                  <span className="text-3xl text-white">
                    Digital Design Ecommerce
                  </span>
                </div>

                <div
                  className="absolute -bottom-full left-12
                  z-50 transition-all duration-700 group-hover:bottom-8"
                >
                  <span className="font-secondary text-sm font-medium text-slate-400">
                    ReactJS · NextJS · Typescript · TailwindCSS · GraphQL
                  </span>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
