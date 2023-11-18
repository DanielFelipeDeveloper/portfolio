'use client'
// motion
import { motion } from 'framer-motion'
// variant
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
                I&apos;m updating this section, working on more relevant
                projects!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
