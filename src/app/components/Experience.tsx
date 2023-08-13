'use client'
// motion
import { motion } from 'framer-motion'
// icons
import { BsArrowUpRight } from 'react-icons/bs'
// variants
import { fadeIn } from '../variants'
// react scroll
import Link from 'next/link'
import ScrollInto from 'react-scroll-into-view'

const services = [
  {
    name: 'Software Engineer · Semantix',
    date: 'Dec 2020 - May 2023 · 2 yrs 6 mos',
    description:
      "Back-end developer, working with Restful and customized API's constructions, responsible for integrations related to the configuration, analysis and management of LinkApi product implementation projects. I was able to work and collaborate with important clients, systems and companies.",
    techs:
      'Javascript, NodeJS, NestJS, ReactJS, NextJS, MongoDB, SQL, Redis, Kafka, RabbitMQ, Gitlab, Azure.',
    link: 'https://us.semantix.ai/solutions/products/semantix-data-platform/',
  },
  {
    name: 'Online Support Specialist · Amazonia Sistemas',
    date: 'Feb 2020 - Sep 2020 · 8 mos',
    description:
      'Online support and customer service, through chat, calls and connections through Teamviewer to help the customer and solve problems related to the ERP System.',
    techs:
      'Customers Support and Assistance, Communication, Persuasion, Solving Problems, SQLServer.',
    link: 'https://amazoniasistemas.com.br/',
  },
]

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="mb-12 flex-1 bg-no-repeat mix-blend-lighten lg:mb-0 lg:bg-services lg:bg-bottom"
          >
            <h2 className="h2 mb-6 text-accent">Experience</h2>

            <ScrollInto selector="#work" smooth>
              <Link href="#work">
                <button className="btn btn-sm">See my work</button>
              </Link>
            </ScrollInto>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {services.map((service) => {
                const { name, date, description, link, techs } = service

                return (
                  <div
                    key={name}
                    className="mb-[20px] flex h-auto border-b border-white/20
                    pb-4"
                  >
                    <div className="max-w-[476px]">
                      <h4
                        className="text-lg font-semibold tracking-wider
                      lg:text-[20px]"
                      >
                        {name}
                      </h4>
                      <h5 className="mb-4 text-sm leading-tight text-gray-300 lg:text-base">
                        {date}
                      </h5>
                      <p className="font-secondary text-base leading-tight lg:text-lg">
                        {description}
                      </p>

                      <h4 className="mt-1 text-sm font-medium text-slate-200 lg:text-base">
                        {techs}
                      </h4>
                    </div>

                    <div className="flex flex-1 flex-col items-end">
                      <a
                        href={link}
                        target="_blank"
                        className="btn mb-[42px] flex h-9 w-9 items-center
                        justify-center"
                      >
                        <BsArrowUpRight />
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
