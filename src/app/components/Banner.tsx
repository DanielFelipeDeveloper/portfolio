"use client"
// Type Animation
import { TypeAnimation } from 'react-type-animation'
// Motion
import { motion } from 'framer-motion'
// Variants
import { fadeIn } from '../variants'
// react scroll
import { Link } from "react-scroll"

export function Banner() {
  return (
    <section className="section items-start min-h-screen h-full mt-24" id="home">
      <div className="container mx-auto">
        <div className='flex flex-row gap-y-8 items-center gap-x-12'>
          <div className='flex-1 text-left font-secondary'>
            <motion.h1
              variants={fadeIn('up', 0.1)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[18px] md:text-[25px] ml-[2px] md:ml-[4px] mb-4 text-accent font-semibold'
            >
              Hi, my name is
            </motion.h1>

            <motion.h1
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[50px] font-bold leading-[0.8] md:text-[62px] lg:text-[80px] mb-4'
            >
              Daniel <span>Breda.</span>
            </motion.h1>

            <motion.div
              className='mb-6 text-[30px] md:text-[62px] lg:text-[80px] font-secondary font-bold leading-[1]'
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
            >
              <TypeAnimation 
                sequence={[
                  'I am a Software Engineer.',
                  2000,
                  'I build things for the web.',
                  2000,
                  'I am a Music Producer.',
                  2000,
                ]} 
                speed={50}
                className='text-slate-400'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>

            <motion.p 
              className='mb-8 max-w-xl lg:mx-0'
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
            >
              I am a dedicated and highly qualified self-taught programmer, passionate about acquiring new knowledge and taking on fresh challenges. If you are seeking a professional with the ability to work efficiently, deliver top-notch quality, and solve problems effectively, then I am the person you need.
            </motion.p>
                
            <motion.div 
              className='flex max-w-max gap-x-6 items-center mx-0 mb-12'
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView={'show'} 
              viewport={{ once: false, amount: 0.7 }} 
            >
              <Link
                to="contact"
                smooth={true}
                spy={true}
              >
                <button className='btn btn-lg'>Contact me</button>
              </Link>

              {/* <Link 
                to="services"
                spy={true}
                smooth={true}
              >
                <p className='text-gradient-link btn-link cursor-pointer'>
                  My Portfolio
                </p>
              </Link> */}
              
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}