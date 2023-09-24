'use client'
// motion
import { motion } from 'framer-motion'
// variant
import Image from 'next/image'
import Link from 'next/link'
import { fadeIn } from '../variants'

import { latestWork } from '../constants'

export function Work() {
  const firstWork = latestWork[0]
  const works = latestWork.slice(1, 3)

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
              <a href={firstWork.link} target="_blank">
                <div
                  className="absolute z-40 h-full w-full
                transition-all duration-300 group-hover:bg-black/70"
                />

                <div className="relative h-full w-full object-cover transition-all duration-500 group-hover:scale-125">
                  <Image
                    className="object-cover"
                    src={firstWork.image}
                    alt="image"
                    fill
                  />
                </div>

                <div
                  className="absolute -bottom-full left-12
                z-50 transition-all duration-500 group-hover:bottom-24"
                >
                  <span className="text-gradient">{firstWork.type}</span>
                </div>

                <div
                  className="absolute -bottom-full left-12
                z-50 transition-all duration-700 group-hover:bottom-14"
                >
                  <span className="text-3xl text-white">{firstWork.name}</span>
                </div>

                <div
                  className="absolute -bottom-full left-12
                z-50 transition-all duration-700 group-hover:bottom-8"
                >
                  <span className="font-secondary text-sm font-medium text-slate-400">
                    {firstWork.skills}
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
            {works.map((work) => (
              <div
                key={work.name}
                className="group relative h-screen max-h-[280px]
               overflow-hidden rounded-xl border-2 border-white/50"
              >
                <a href={work.link} target="_blank">
                  <div
                    className="absolute z-40 h-full w-full
                   transition-all duration-300 group-hover:bg-black/70"
                  />

                  <div className="relative h-full w-full object-cover transition-all duration-500 group-hover:scale-125">
                    <Image
                      src={work.image}
                      alt="image"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div
                    className="absolute -bottom-full left-12
                   z-50 transition-all duration-500 group-hover:bottom-24"
                  >
                    <span className="text-gradient">{work.type}</span>
                  </div>

                  <div
                    className="absolute -bottom-full left-12
                   z-50 transition-all duration-700 group-hover:bottom-14"
                  >
                    <span className="text-3xl text-white">{work.name}</span>
                  </div>

                  <div
                    className="absolute -bottom-full left-12
                   z-50 transition-all duration-700 group-hover:bottom-8"
                  >
                    <span className="font-secondary text-sm font-medium text-slate-400">
                      {work.skills}
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
