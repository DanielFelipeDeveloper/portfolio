"use client"
import { motion } from 'framer-motion'
import { BiPhone } from 'react-icons/bi'
import { fadeIn } from '../variants'

export function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2
              tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-4">
                Let's work <br /> together!
              </h2>

              <div className='flex items-center mb-8 gap-1'>
                <BiPhone fontSize={24}/>
                <h5>+353 83 473 0864</h5>
              </div>
            </div>
          </motion.div>

          <motion.form
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 mt-10 pb-18 p-6 items-start"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full
              placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your name"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full
              placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your email"
            />
            <textarea
              className="bg-transparent border-b py-3 outline-none w-full
              placeholder:text-white focus:border-accent transition-all
              resize-none mb-2 h-32"
              placeholder="Your message"
            ></textarea>

            <button className="btn btn-lg">Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}