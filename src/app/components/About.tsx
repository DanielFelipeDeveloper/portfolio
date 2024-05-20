'use client'
// countup
// intersection observer hook
import { useInView } from 'react-intersection-observer'
// motion
import { motion } from 'framer-motion'
// variant
import { fadeIn } from '../variants'

import { AiOutlineCaretRight } from 'react-icons/ai'

export function About() {
  const [ref] = useInView({
    threshold: 0.5,
  })

  return (
    <section className="section about" id="about" ref={ref}>
      <div className="container mx-auto">
        <div
          className="flex flex-col lg:flex-row lg:items-center
        lg:gap-x-20 lg:gap-y-0"
        >
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="max-w-xl pt-2"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">
              I&apos;m a Software Engineer with over 5 years of experience.
            </h3>
            <p className="mb-2">
              I am a skilled programmer specialized in web development, working
              proficiently with ReactJS, NextJS, NodeJS and other JavaScript
              technologies. focused on creating a efficient and maintainable
              code, ensuring the delivery of high-quality software products.
              building dynamic, responsive, feature-rich, high-performance
              front-end applications and robust and scalable backend solutions.
            </p>
            <p className="mt-4">
              Here are a few technologies I’ve been working with recently:
            </p>

            <ul className="my-4 grid grid-cols-3">
              <li className="flex items-center text-slate-400">
                <AiOutlineCaretRight color="#38BDF8" fontSize={8} /> Javascript
              </li>
              <li className="flex items-center text-slate-400">
                <AiOutlineCaretRight color="#38BDF8" fontSize={8} /> Typescript
              </li>
              <li className="flex items-center text-slate-400">
                <AiOutlineCaretRight color="#38BDF8" fontSize={8} /> React
              </li>
              <li className="flex items-center text-slate-400">
                <AiOutlineCaretRight color="#38BDF8" fontSize={8} /> NextJS
              </li>
              <li className="flex items-center text-slate-400">
                <AiOutlineCaretRight color="#38BDF8" fontSize={8} /> React
                Native
              </li>
              <li className="flex items-center text-slate-400">
                <AiOutlineCaretRight color="#38BDF8" fontSize={8} /> Node.js
              </li>
              <li className="flex items-center text-slate-400">
                <AiOutlineCaretRight color="#38BDF8" fontSize={8} /> Nest.js
              </li>
              <li className="flex items-center text-slate-400">
                <AiOutlineCaretRight color="#38BDF8" fontSize={8} /> SQL
              </li>
              <li className="flex items-center text-slate-400">
                <AiOutlineCaretRight color="#38BDF8" fontSize={8} /> MongoDB
              </li>
            </ul>

            {/* <div className='flex gap-x-6 lg:gap-x-10 mt-6'>
              <div>
                <div 
                  className='text-[40px] font-tertiary text-gradient mb-2'
                >
                  +
                  {
                    inView ? <CountUp start={0} end={3} duration={3} /> : null
                  }
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br />
                  Experience
                </div>
              </div>

              <div>
                <div 
                  className='text-[40px] font-tertiary text-gradient mb-2'
                >
                  {
                    inView ? <CountUp start={0} end={12} duration={3} /> : null
                  }
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br />
                  Completed
                </div>
              </div>
            </div> */}
          </motion.div>

          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="h-[640px] flex-1 bg-about bg-contain bg-top
            bg-no-repeat mix-blend-lighten"
          />
        </div>
      </div>
    </section>
  )
}
