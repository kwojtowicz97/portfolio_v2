import { type } from '@testing-library/user-event/dist/type'

export type TProjects = {
  [key: string]: TProject
}

export type TFeature = {
  id: string
  name: string
  mbPhoto: string
  ipPhoto?: string
}

export type TProject = {
  name: string
  description: string
  live: string
  header: string
  features: TFeature[]
  iPhonePreview?: boolean
  technologies?: TTechnology[]
}

export type TTechnology = {
  name: string
  logo?: string
  url: string
}

const technologies: { [key: string]: TTechnology } = {
  react: {
    name: 'React',
    url: 'https://reactjs.org/',
  },
  typeScript: {
    name: 'TypeScript',
    url: 'https://www.typescriptlang.org/',
  },
  node: {
    name: 'Node.js',
    url: 'https://nodejs.org/',
  },
  express: {
    name: 'Express',
    url: 'https://expressjs.com/',
  },
  mongoDB: {
    name: 'MongoDB',
    url: 'https://www.mongodb.com/',
  },
  mongoose: {
    name: 'Mongoose',
    url: 'https://mongoosejs.com/',
  },
  bootstrap: {
    name: 'Bootstrap',
    url: 'https://getbootstrap.com/',
  },
  reactQuery: {
    name: 'React Query',
    url: 'https://react-query-v3.tanstack.com/',
  },
  reactRouter: {
    name: 'React Router',
    url: 'https://react-query-v3.tanstack.com/',
  },
  JWT: {
    name: 'JSON Web Token',
    url: 'https://jwt.io/',
  },
  bcrypt: {
    name: 'Bcrypt',
    url: 'https://bcrypt.online/',
  },
  reactFlow: {
    name: 'React Flow',
    url: 'https://reactflow.dev/',
  },
  CSSModules: {
    name: 'CSS Modules',
    url: 'https://github.com/css-modules/css-modules',
  },
  DnD: {
    name: 'React DnD',
    url: 'https://react-dnd.github.io/react-dnd/about',
  },
  CSS: {
    name: 'CSS',
    url: 'https://pl.wikipedia.org/wiki/CSS',
  },
  JS: {
    name: 'JavaScript',
    url: 'https://www.javascript.com/',
  },
  leaflet: {
    name: 'React Leaflet',
    url: 'https://react-leaflet.js.org/',
  },
  redux: {
    name: 'React Redux',
    url: 'https://react-redux.js.org/',
  },
}

export const projects: TProjects = {
  jobFinder: {
    name: 'Job Finder',
    description:
      'The website features a job finding platform that allows users to easily search and apply for job offers, create and manage their CV, browse companies, and read and write reviews. The website is designed to be fully responsive and accessible on both desktop and mobile devices. Users can create accounts and log in to access additional features, such as the ability to add new job offers and view received applications for companies.',
    iPhonePreview: true,
    header: '',
    live: '',
    technologies: [
      technologies.react,
      technologies.typeScript,
      technologies.node,
      technologies.express,
      technologies.mongoDB,
      technologies.mongoose,
      technologies.reactQuery,
      technologies.bootstrap,
      technologies.JWT,
      technologies.bcrypt,
    ],
    features: [
      {
        id: '1',
        name: 'Search job offers by title and by location',
        ipPhoto: '../assets/ip_jf1.PNG',
        mbPhoto: '../assets/mb_jf1.PNG',
      },
      {
        id: '2',
        name: 'View job offer details',
        ipPhoto: '../assets/ip_jf2.PNG',
        mbPhoto: '../assets/mb_jf2.PNG',
      },
      {
        id: '3',
        name: 'Apply for a job offer and send a CV file',
        ipPhoto: '../assets/ip_jf3.PNG',
        mbPhoto: '../assets/mb_jf3.PNG',
      },
      {
        id: '4',
        name: 'View statuses of send job applications as a personal user',
        ipPhoto: '../assets/ip_jf4.PNG',
        mbPhoto: '../assets/mb_jf4.PNG',
      },
      {
        id: '5',
        name: 'Create CV with build in builder',
        ipPhoto: '../assets/ip_jf5.PNG',
        mbPhoto: '../assets/mb_jf5.PNG',
      },
      {
        id: '6',
        name: 'Update personal information and create new company',
        ipPhoto: '../assets/ip_jf6.PNG',
        mbPhoto: '../assets/mb_jf6.PNG',
      },
      {
        id: '7',
        name: 'View a company details, offers and reviews',
        ipPhoto: '../assets/ip_jf7.PNG',
        mbPhoto: '../assets/mb_jf7.PNG',
      },
      {
        id: '8',
        name: 'Add a company review',
        ipPhoto: '../assets/ip_jf8.PNG',
        mbPhoto: '../assets/mb_jf8.PNG',
      },
      {
        id: '9',
        name: 'Save a job offer in favourites',
        ipPhoto: '../assets/ip_jf9.PNG',
        mbPhoto: '../assets/mb_jf9.PNG',
      },
      {
        id: '10',
        name: 'Search all companies by name and location and see the ones with most offers and the best rated',
        ipPhoto: '../assets/ip_jf10.PNG',
        mbPhoto: '../assets/mb_jf10.PNG',
      },
      {
        id: '11',
        name: 'Login or create a new account',
        ipPhoto: '../assets/ip_jf11.PNG',
        mbPhoto: '../assets/mb_jf11.PNG',
      },
      {
        id: '12',
        name: 'Update statuses of recieved job applications as a company',
        ipPhoto: '../assets/ip_jf12.PNG',
        mbPhoto: '../assets/mb_jf12.PNG',
      },
      {
        id: '13',
        name: 'Create a new job offer',
        ipPhoto: '../assets/ip_jf13.PNG',
        mbPhoto: '../assets/mb_jf13.PNG',
      },
      {
        id: '14',
        name: "Edit company's informations and upload new logo",
        ipPhoto: '../assets/ip_jf14.PNG',
        mbPhoto: '../assets/mb_jf14.PNG',
      },
    ],
  },
  kanban: {
    name: 'Kanban Board',
    description:
      'The website allows users to create projects and add lists, such as "to do," "in progress," and "done." Tasks can be added to each list and can be moved between lists by dragging and dropping them. The website also features a switch between Kanban board view and list view. The list view includes filters for easy organization and task management.',
    header: 'Tasks management website',
    live: 'https://kanban-board-sigma-six.vercel.app/',
    technologies: [
      technologies.react,
      technologies.typeScript,
      technologies.DnD,
      technologies.CSSModules,
    ],
    features: [
      {
        id: '1',
        name: 'Add tasks with tasks title and rich text description to the lists',
        mbPhoto: '../assets/mb_kb1.png',
      },
      {
        id: '2',
        name: 'Move tasks between lists by draginng and dropping them',
        mbPhoto: '../assets/mb_kb2.png',
      },
      {
        id: '3',
        name: 'Preview and edit a task by clicking on it',
        mbPhoto: '../assets/mb_kb7.png',
      },
      {
        id: '4',
        name: 'Collapse a list to make a board more redable',
        mbPhoto: '../assets/mb_kb3.png',
      },
      {
        id: '5',
        name: 'Add new lists to the board',
        mbPhoto: '../assets/mb_kb4.png',
      },
      {
        id: '6',
        name: 'Switch board to list view',
        mbPhoto: '../assets/mb_kb5.png',
      },
      {
        id: '7',
        name: 'Use sorting and filters to find tasks that you are interested in',
        mbPhoto: '../assets/mb_kb6.png',
      },
    ],
  },
  logicGatesSimulator: {
    name: 'Logic gates simulator',
    description:
      'It is a tool for simulating and experimenting with digital logic circuits. On the website, users can easily add logic gates from the sidebar and connect them using wires to create complex circuit diagrams. The website also features a reusable block functionality, allowing users to save frequently used logic gate combinations for easy access. Additionally, the website includes a project feature, where users can save their circuit diagrams and access them later from local storage.',
    header: 'Website to simulate logic gates systems',
    live: 'https://logic-gates-simulator-zeta.vercel.app/',
    technologies: [
      technologies.react,
      technologies.typeScript,
      technologies.reactFlow,
      technologies.CSS,
    ],
    features: [
      {
        id: '1',
        name: 'Add logic gates and blocks by dragging them from the sidebar to the working area',
        mbPhoto: '../assets/mb_lgs1.png',
      },
      {
        id: '2',
        name: 'Connect logic gates by dragging a wire between their input and output handles',
        mbPhoto: '../assets/mb_lgs2.png',
      },
      {
        id: '3',
        name: 'Create reusable blocks from logic gates with named inputs and outputs',
        mbPhoto: '../assets/mb_lgs3.png',
      },
      {
        id: '4',
        name: 'Create multiple projects',
        mbPhoto: '../assets/mb_lgs4.png',
      },
      {
        id: '5',
        name: 'Save project to local storage manually or enable autosaving option',
        mbPhoto: '../assets/mb_lgs5.png',
      },
    ],
  },
  extinguisherManagementSystem: {
    name: 'Fire extinguisher management system',
    description:
      'The fire extinguisher management system website is designed to make managing a large number of extinguishers easier. The website features an interactive map of a building that shows the locations of all the points where extinguishers should be placed. Users can easily check data about each point and extinguisher, including inspection status and assigned extinguisher type. The website also includes a sidebar that lists all potential dangers and warnings, such as overdue inspections or points without extinguishers. Users can also add new points to the map and add new extinguishers, making it easy to keep the fire extinguisher management system up-to-date and accurate.',
    header: 'Website to simulate logic gates systems',
    live: 'https://extinguisher-management-system.vercel.app/',
    iPhonePreview: true,
    technologies: [
      technologies.react,
      technologies.JS,
      technologies.redux,
      technologies.leaflet,
      technologies.CSS,
    ],
    features: [
      {
        id: '1',
        name: 'Interactive layout of a building with all extinguisher points marked',
        mbPhoto: '../assets/mb_ems1.png',
        ipPhoto: '../assets/ip_ems1.png',
      },
      {
        id: '2',
        name: 'Add new points and extinguishers',
        mbPhoto: '../assets/mb_ems2.png',
        ipPhoto: '../assets/ip_ems2.png',
      },
      {
        id: '3',
        name: 'Display and update data about points and extinguishers',
        mbPhoto: '../assets/mb_ems3.png',
        ipPhoto: '../assets/ip_ems3.png',
      },
      {
        id: '4',
        name: 'Make inspections',
        mbPhoto: '../assets/mb_ems4.png',
        ipPhoto: '../assets/ip_ems4.png',
      },
      {
        id: '5',
        name: 'See all possible dangers and warnings',
        mbPhoto: '../assets/mb_ems5.png',
        ipPhoto: '../assets/ip_ems5.png',
      },
    ],
  },
}
