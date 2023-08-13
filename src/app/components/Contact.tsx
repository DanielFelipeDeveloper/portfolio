'use client'
import { motion } from 'framer-motion'
import { BiPhone } from 'react-icons/bi'
import { fadeIn } from '../variants'

export function Contact() {
  return (
    <section className="section pb-64" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-1 items-center justify-start"
          >
            <div>
              <h4
                className="h2 mb-2 uppercase tracking-wide
              text-accent"
              >
                Get in touch
              </h4>
              <h2 className="mb-4 text-[45px] leading-none lg:text-[60px]">
                Let&apos;s work together!
              </h2>

              <motion.p
                className="mb-6 max-w-xl lg:mx-0"
                variants={fadeIn('up', 0.4)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
              >
                My inbox is always open, so feel free to get in touch with me,
                whether it&apos;s about business, opportunities, or if you have
                any questions. I will do my best to promptly respond to your
                message!
              </motion.p>

              <div className="mb-6 flex items-center gap-1">
                <BiPhone fontSize={24} />
                <h5>+353 83 473 0864</h5>
              </div>

              <button className="btn btn-lg">
                <a href="mailto:bredacoder@gmail.com">Say Hello</a>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
