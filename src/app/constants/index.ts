import { amazoniaSistemas, flipPay, goMediaGroup, semantix } from '../assets'

const experiences = [
  {
    title: 'Software Engineer',
    company_name: 'Flip Pay · Contract',
    icon: flipPay,
    iconBg: '#E6DEDD',
    date: 'Sep 2023 - Present',
    points: [
      'Developing and maintaining implementations of the digital content monetization product for several clients.',
      'Collaborate with a cross-functional team, including product managers and other developers, to create high-quality solutions for our customers.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
    ],
  },
  {
    title: 'Frontend Developer',
    company_name: 'GoMediaGroup · Freelance',
    icon: goMediaGroup,
    iconBg: '#E6DEDD',
    date: 'Aug 2023 - Present',
    points: [
      'Developing and maintaining E-Commerce Web Applications using HTML, CSS, Javascript, Shopify and Wordpress.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Creating and optimizing customized components according to customer needs.',
    ],
  },
  {
    title: 'Software Engineer',
    company_name: 'Semantix Brasil · Full-time',
    icon: semantix,
    iconBg: '#E6DEDD',
    date: 'Dec 2020 - May 2023',
    points: [
      'Developing and maintaining custom Integrations, Automations, Webhooks, Restful APIs, API Gateways, Microservices and custom Frontends.',
      'Responsible for creating and maintaining integrations with one of the two largest marketplaces in Brazil (Magazine Luiza and Via Varejo), generating daily revenue of more than R$50,000 for our client.',
      'Collaborating with cross-functional teams including product managers, and other developers to create high-quality solutions.',
      'Direct contact with clients, assisting in problem-solving, defining business rules and assisting in the entire process of projects',
    ],
  },
  {
    title: 'Online Support Specialist',
    company_name: 'Amazônia Sistemas Software · Full-time',
    icon: amazoniaSistemas,
    iconBg: '#E6DEDD',
    date: 'Feb 2020 - Sep 2020',
    points: [
      'Customer service providing full technical support, assisting with problems related to the ERP system.',
      'Collaborating with cross-functional teams, including support specialists and software developers, to deliver efficient, fast and high-quality solutions to our customers.',
      'Implementing customized SQL solutions to solve customer needs.',
      'Strong experience in teamwork, communication, agility and multitasking organization.',
    ],
  },
]

const latestWork = [
  {
    type: 'Frontend Development',
    link: 'https://podcastr-next-bredacoder.vercel.app/',
    image: '/assets/podcastr-1.png',
    name: 'Podcastr',
    skills: 'ReactJS · NextJS · Typescript · ContextAPI · Sass',
  },
  {
    type: 'Frontend Development',
    link: 'https://ignews-sigma-one.vercel.app/',
    image: '/assets/ig.news.png',
    name: 'ig.news',
    skills: 'ReactJS · NextJS · SASS · NextAuth · Prismic · Stripe',
  },
  {
    type: 'Frontend Development',
    link: 'https://ecommerce-shopify-bredacoder.vercel.app/',
    image: '/assets/digital-design.png',
    name: 'Digital Design Ecommerce',
    skills: 'ReactJS · NextJS · Typescript · TailwindCSS · GraphQL',
  },
]

const projectsList = [
  {
    year: '2023',
    name: 'ig.news',
    madeAt: 'Personal Project',
    techs:
      'ReactJS · NextJS · SASS · NextAuth · Prismic · Typescript · FaunaDB · Stripe',
    link: 'https://ignews-sigma-one.vercel.app/',
    github: 'https://github.com/bredacoder/ignite-reactjs-ignews',
  },
  {
    year: '2023',
    name: 'Dt Money',
    madeAt: 'Personal Project',
    techs: 'ReactJS · MirageJS · Typescript · StyledComponents',
    link: 'https://breda-coder-dtmoney.vercel.app/',
    github: 'https://github.com/bredacoder/ignite-reactjs-dtmoney',
  },
  {
    year: '2023',
    name: 'Github Explorer',
    madeAt: 'Personal Project',
    techs: 'ReactJS · CSS Modules · Typescript',
    link: 'https://github-explorer-indol-nu.vercel.app/',
    github: 'https://github.com/bredacoder/ignite-reactjs-github-explorer',
  },
  {
    year: '2023',
    name: 'World Trip',
    madeAt: 'Personal Project',
    techs: 'ReactJS · Typescript · ChakraUI',
    link: 'https://bredacoder-worldtrip.vercel.app/',
    github: 'https://github.com/bredacoder/ignite-reactjs-worldtrip',
  },
  {
    year: '2023',
    name: 'Space Travelling',
    madeAt: 'Personal Project',
    techs: 'ReactJS · NextJs · CSS Modules · Typescript',
    link: 'https://ignite-reactjs-challenge05-spacetraveling.vercel.app/',
    github:
      'https://github.com/bredacoder/ignite-reactjs-challenge05-spacetraveling',
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
    name: 'Dashgo',
    madeAt: 'Personal Project',
    techs:
      'ReactJS · NextJS · ChakraUI · Typescript · Yup · MirageJS · React Query',
    github: 'https://github.com/bredacoder/ignite-reactjs-dashgo',
  },
]

export { experiences, latestWork, projectsList }
