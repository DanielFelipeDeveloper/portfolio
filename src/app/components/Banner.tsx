'use client'
// Type Animation
import { TypeAnimation } from 'react-type-animation'
// Motion
import { motion } from 'framer-motion'
// Variants
import { fadeIn } from '../variants'
// react scroll
import Link from 'next/link'
import ScrollInto from 'react-scroll-into-view'

export function Banner() {
  return (
    <section className="section mt-16 items-start" id="home">
      <div className="container mx-auto">
        <div className="flex flex-row items-center gap-x-12 gap-y-8">
          <div className="flex-1 text-left font-secondary">
            <motion.h1
              variants={fadeIn('left', 0.1)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-4 ml-[2px] text-[18px] font-semibold text-accent md:ml-[4px] md:text-[25px]"
            >
              Hi, my name is
            </motion.h1>

            <motion.h1
              variants={fadeIn('left', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-4 text-[50px] font-bold leading-[0.8] md:text-[62px] lg:text-[80px]"
            >
              Daniel <span>Breda.</span>
            </motion.h1>

            <motion.div
              className="mb-6 font-secondary text-[30px] font-bold leading-[1] md:text-[62px] lg:text-[80px]"
              variants={fadeIn('left', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
            >
              <TypeAnimation
                sequence={[
                  'I build things for the web.',
                  2000,
                  'I am a Software Engineer.',
                  2000,
                ]}
                speed={50}
                className="text-slate-400"
                wrapper="span"
                repeat={0}
              />
            </motion.div>

            <motion.p
              className="mb-8 max-w-xl lg:mx-0"
              variants={fadeIn('left', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
            >
              I am a dedicated and highly qualified self-taught programmer,
              passionate about acquiring new knowledge and taking on fresh
              challenges. If you are seeking a professional with the ability to
              work efficiently, deliver top-notch quality, and solve problems
              effectively, then I am the person you need.
            </motion.p>

            <motion.div
              className="mx-0 mb-12 flex max-w-max items-center gap-x-6"
              variants={fadeIn('left', 0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
            >
              <ScrollInto selector="#contact" smooth>
                <Link href="#contact">
                  <button className="btn btn-lg">Contact me</button>
                </Link>
              </ScrollInto>

              <ScrollInto selector="#experience" smooth>
                <Link href="#experience">
                  <p className="text-gradient-link btn-link cursor-pointer">
                    Experience
                  </p>
                </Link>
              </ScrollInto>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
