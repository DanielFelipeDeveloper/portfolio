"use client"
// Icons
import { FaGithub, FaLinkedin } from 'react-icons/fa'
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
    <section className="min-h-[85vh] lg:min-h-[78vh] flex items-center" id="home">
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center
        lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.1)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[25px] mb-2 ml-1 text-accent font-semibold'
            >
              Hi, my name is
            </motion.h1>

            <motion.h1
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.8] lg:text-[90px] m-0'
            >
              Daniel <span>Breda</span>
            </motion.h1>

            <motion.div
              className='mb-6 text-[36px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1]'
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
            >
              <span className='text-white mr-3'>I</span>
              <TypeAnimation 
                sequence={[
                  'am a Software Engineer',
                  2000,
                  'Build things for the web',
                  2000,
                ]} 
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>

            <motion.p 
              className='mb-8 max-w-3xl mx-auto lg:mx-0'
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
            >
              I am a dedicated and highly qualified self-taught programmer.
              passionate about acquiring new knowledge and taking on new challenges,
              I always seek to work with the best practices, solutions and technologies to improve the efficiency and quality of the projects I work on.
            </motion.p>
                
            <motion.div 
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
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

              <Link 
                to="services"
                spy={true}
                smooth={true}
              >
                <p className='text-gradient btn-link cursor-pointer'>
                  My Portfolio
                </p>
              </Link>
              
            </motion.div>

            <motion.div 
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
            >
              <a href="https://www.linkedin.com/in/danielfelipedeveloper/" target='blank'>
                <FaLinkedin />
              </a>
              <a href="https://github.com/DanielFelipeDeveloper" target='blank'>
                <FaGithub />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}