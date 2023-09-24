'use client'
import { experiences } from '@/app/constants'
import { fadeIn } from '@/app/variants'
// motion
import { motion } from 'framer-motion'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import { ExperienceCard } from './ExperienceCard'

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn('right', 0.5)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
        >
          <p className="max-w-sm">What I have done so far</p>
          <h2 className="h2 leading-tight text-accent">Work Experience.</h2>
        </motion.div>

        <div className="mt-20 flex flex-col">
          <VerticalTimeline lineColor="#94a3b8">
            {experiences.map((experience) => (
              <ExperienceCard
                key={`experience-${experience.title}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  )
}
