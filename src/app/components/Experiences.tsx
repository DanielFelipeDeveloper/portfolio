"use client"
// motion
import { motion } from 'framer-motion';
// icons
import { BsArrowUpRight } from "react-icons/bs";
// variants
import { fadeIn } from "../variants";
// react scroll
import { Link } from "react-scroll";

const services = [
  {
    name: 'Software Engineer · Semantix',
    date: "Dec 2020 - May 2023 · 2 yrs 6 mos",
    description: "Back-end developer, working with Restful and customized API's constructions, responsible for integrations related to the configuration, analysis and management of LinkApi product implementation projects. I was able to work and collaborate with important clients, systems and companies: - Sicoob, Coopera, VTEX, TOTVS, Oracle, Salesforce, Magazine Luiza, Via Varejo, Solides, Anymarket, Lojas Colombo, Hospital Care, Tradimus and Gympass.",
    link: 'https://us.semantix.ai/solutions/products/semantix-data-platform/',
  },
  {
    name: 'Online Support Specialist · Amazonia Sistemas',
    date: "Feb 2020 - Sep 2020 · 8 mos",
    description: "Online support and customer service, through chat, calls and connections through Teamviewer to help the customer and solve problems related to the ERP System. Experience in: Team work, Launching and Protocoling of support and assistance, Communication, Persuasion, Solution Focus, Solving Complex Problems, and system logic, SQLServer, Home Office.",
    link: 'https://amazoniasistemas.com.br/',
  },
]

export function Experiences() {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">Experiences</h2>
            {/* <h3 className="h3 max-w-[455px] mb-16">Fullstack Development</h3> */}
            <Link
              to="work"
              smooth={true}
              spy={true}
            >
              <button className="btn btn-sm">See my work</button>
            </Link>
          </motion.div>

          <motion.div 
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {services.map(service => {
                const { name, date, description, link } = service;

                return (
                  <div 
                    key={name} 
                    className="border-b border-white/20 h-auto pb-4 mb-[20px]
                    flex"
                  >
                    <div className='max-w-[476px]'>
                      <h4 className="text-lg lg:text-[20px] tracking-wider
                      font-semibold">
                        {name}
                      </h4>
                      <h5 className='mb-4 text-sm lg:text-base text-gray-300 leading-tight'>{date}</h5>
                      <p className="font-secondary text-base lg:text-lg leading-tight">
                        {description}
                      </p>
                    </div>

                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href={link}
                        target='_blank'
                        className="btn w-9 h-9 mb-[42px] flex justify-center
                        items-center"
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