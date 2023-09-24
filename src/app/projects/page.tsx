'use client'
import { motion } from 'framer-motion'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { FiGithub } from 'react-icons/fi'
import { projectsList } from '../constants'
import { fadeIn } from '../variants'

export default function Projects() {
  return (
    <section className="section mt-28 flex-col items-start">
      <motion.header
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className="px-6"
      >
        <h1 className="mb-4 text-[45px] font-bold leading-[0.8] md:text-[60px] lg:text-[70px]">
          Projects
        </h1>

        <h1 className="mb-4 ml-[2px] text-[16px] font-semibold text-accent md:ml-[4px] md:text-[20px]">
          List of all the projects I&apos;ve worked on
        </h1>
      </motion.header>

      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className="mt-10 w-full px-4 lg:mt-20"
      >
        <table className="w-full">
          <thead>
            <tr className="text-left text-xl text-slate-400">
              <th>Year</th>
              <th className="w-screen max-w-[400px]">Project</th>
              <th className="hidden w-screen max-w-[180px] md:table-cell">
                Made at
              </th>
              <th className="hidden w-screen max-w-[550px] md:table-cell">
                Built With
              </th>
              <th>Link</th>
            </tr>
          </thead>

          <tbody>
            {projectsList.map((project) => (
              <tr
                key={project.name}
                className="transition-all hover:bg-[#112240]"
              >
                <td className="rounded-s-md text-lg font-semibold text-accent">
                  {project.year}
                </td>
                <td className="text-xl font-semibold">{project.name}</td>
                <td className="hidden text-base font-medium text-slate-400 md:table-cell">
                  {project.madeAt}
                </td>
                <td className="hidden text-sm font-medium text-slate-400 md:table-cell">
                  {project.techs}
                </td>
                <td className="rounded-e-md">
                  <div className="flex items-center gap-3">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        className="shrink-0"
                      >
                        <FaArrowUpRightFromSquare
                          size={15}
                          className="transition-all hover:translate-y-[-2px] hover:text-accent"
                        />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        className="shrink-0"
                      >
                        <FiGithub
                          size={16}
                          className="transition-all hover:translate-y-[-2px] hover:text-accent"
                        />
                      </a>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  )
}
