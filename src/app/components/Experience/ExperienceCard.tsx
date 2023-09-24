import Image, { StaticImageData } from 'next/image'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

interface ExperienceCardData {
  experience: {
    title: string
    company_name: string
    icon: StaticImageData
    iconBg: string
    date: string
    points: string[]
  }
}

export function ExperienceCard({ experience }: ExperienceCardData) {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: 'rgba(15, 23, 45, 0.1)',
        boxShadow: '0 10px 30px 10px rgba(2,12,27,0.7)',
        color: 'text-gray-300',
      }}
      contentArrowStyle={{ borderRight: '7px solid  #38bdf8' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <div className="h-[60%] w-[60%]">
            <Image
              className="object-contain"
              src={experience.icon}
              alt={experience.company_name}
              fill
            />
          </div>
        </div>
      }
    >
      <div>
        <h3 className="h3 mb-0 text-[24px] font-bold text-slate-200">
          {experience.title}
        </h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="ml-5 mt-5 list-disc space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 pl-1 text-[14px] tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}
