"use client"
// Icons
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
// Type Animation
import { TypeAnimation } from 'react-type-animation'
// Motion
import { motion } from 'framer-motion'
// Variants
import { fadeIn } from '../variants'

export function Banner() {
  return (
    <section className="min-h-[85vh] lg:min-h-[78vh] flex items-center" id="home">
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center
        lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.8] lg:text-[90px]'
            >
              Daniel <span>Breda</span>
            </motion.h1>

            <motion.div
              className='mb-6 text-[36px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1]'
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
            >
              <span className='text-white mr-3'>I am a</span>
              <TypeAnimation 
                sequence={[
                  'Software Engineer',
                  2000,
                  'Fullstack Developer',
                  2000,
                  'Musical Productor',
                  2000,
                ]} 
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>

            <motion.p 
              className='mb-8 max-w-lg mx-auto lg:mx-0'
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem hic voluptates illo itaque est illum nemo esse! Molestiae nemo consectetur aut illo ad at sequi recusandae, accusamus cum architecto neque?
            </motion.p>
                
            <motion.div 
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView={'show'} 
              viewport={{ once: false, amount: 0.7 }} 
            >
              <button className='btn btn-lg'>Contact me</button>
              <a href="#" className='text-gradient btn-link'>
                My Portfolio
              </a>
            </motion.div>

            <motion.div 
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'
              variants={fadeIn('up', 0.7)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
            >
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
            </motion.div>
          </div>

          <motion.div 
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'
            variants={fadeIn('down', 0.5)}
            initial="hidden"
            whileInView={'show'} 
          >
            <img src='/assets/avatar.svg' alt="avatar" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}