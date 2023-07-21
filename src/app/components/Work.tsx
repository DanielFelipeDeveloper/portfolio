"use client"
// motion
import { motion } from 'framer-motion'
// variant
import { fadeIn } from '../variants'

export function Work() {
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            id="work"
            variants={fadeIn('right', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0 mt-auto pt-20"
          >
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Work.
              </h2>

              <p className="max-w-sm mb-16">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eaque veritatis molestias id! Rem aliquam.
              </p>

              <button className="btn btn-sm">View all projects</button>
            </div>

            <div className="group relative overflow-hidden border-2
            border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute
              z-40 transition-all duration-300"/>

              <img src="assets/portfolio-img1.png" alt="image" className="group-hover:scale-125 transition-all duration-500"/>

              <div className="absolute -bottom-full left-12
              group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>

              <div className="absolute -bottom-full left-12
              group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
              </div>
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
              border-white/50 rounded-xl">
                <div className="group-hover:bg-black/70 w-full h-full absolute
                z-40 transition-all duration-300"/>

                <img src="assets/portfolio-img2.png" alt="image" className="group-hover:scale-125 transition-all duration-500"/>

                <div className="absolute -bottom-full left-12
                group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">UI/UX Design</span>
                </div>

                <div className="absolute -bottom-full left-12
                group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">Project Title</span>
                </div>
            </div>

            <div className="group relative overflow-hidden border-2
            border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute
              z-40 transition-all duration-300"/>

              <img src="assets/portfolio-img3.png" alt="image" className="group-hover:scale-125 transition-all duration-500"/>

              <div className="absolute -bottom-full left-12
              group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>

              <div className="absolute -bottom-full left-12
              group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}