'use client'
import { motion } from 'framer-motion';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { FiGithub } from "react-icons/fi";
import { fadeIn } from '../variants';


const ProjectsList = [
  {
    year: '2023',
    name: 'ig.news',
    madeAt: 'Personal Project',
    techs: 'ReactJS · NextJS · SASS · NextAuth · Prismic · Typescript · FaunaDB · Stripe',
    link: 'https://ignews-sigma-one.vercel.app/',
    github: 'https://github.com/bredacoder/ignite-reactjs-ignews',
  },
  {
    year: '2023',
    name: 'GoBarber',
    madeAt: 'Personal Project',
    techs: 'ReactJS · Styled Components · Typescript · NodeJS',
    github: 'https://github.com/bredacoder/gobarber',
  },
  {
    year: '2023',
    name: 'Github Explorer',
    madeAt: 'Personal Project',
    techs: 'ReactJS · CSS Modules · Typescript',
    github: 'https://github.com/bredacoder/ignite-reactjs-github-explorer',
  },
  {
    year: '2023',
    name: 'Dt Money',
    madeAt: 'Personal Project',
    techs: 'ReactJS · MirageJS · Typescript · StyledComponents',
    github: 'https://github.com/bredacoder/ignite-reactjs-dtmoney',
  },
  {
    year: '2023',
    name: 'Dashgo',
    madeAt: 'Personal Project',
    techs: 'ReactJS · NextJS · ChakraUI · Typescript · Yup · MirageJS · React Query',
    github: 'https://github.com/bredacoder/ignite-reactjs-dashgo',
  },
];

export default function Projects() {
  return (
    <section className='section flex-col items-start mt-28'>
      <motion.header
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className="px-6"
      >
        <h1
          className='text-[45px] font-bold leading-[0.8] md:text-[60px] lg:text-[70px] mb-4'
        >
          Projects
        </h1>

        <h1
          className='text-[16px] md:text-[20px] ml-[2px] md:ml-[4px] mb-4 text-accent font-semibold'
        >
          List of all the projects I've worked on
        </h1>
      </motion.header>

      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className="px-4 mt-10 lg:mt-20 w-full"
      >
        <table className='w-full'>
          <thead>
            <tr className='text-slate-400 text-left text-xl'>
              <th>Year</th>
              <th className='w-screen max-w-[400px]'>Project</th>
              <th className='hidden md:table-cell w-screen max-w-[180px]'>Made at</th>
              <th className='hidden md:table-cell w-screen max-w-[550px]'>Built With</th>
              <th>Link</th>
            </tr>
          </thead>

          <tbody>
            {ProjectsList.map(project => (
              <tr className='hover:bg-[#112240] transition-all'>
                <td className='text-accent font-semibold text-lg rounded-s-md'>{project.year}</td>
                <td className='font-semibold text-xl'>{project.name}</td>
                <td className='hidden md:table-cell text-slate-400 font-medium text-base'>{project.madeAt}</td>
                <td className='hidden md:table-cell text-slate-400 font-medium text-sm'>{project.techs}</td>
                <td className='rounded-e-md'>
                  <div className='flex items-center gap-3'>
                    {project.link && (
                      <a href={project.link} target='_blank' className='shrink-0'>
                        <FaArrowUpRightFromSquare size={15} className="hover:text-accent transition-all hover:translate-y-[-2px]" />
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target='_blank'className='shrink-0'>
                        <FiGithub size={16} className="hover:text-accent transition-all hover:translate-y-[-2px]" />
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