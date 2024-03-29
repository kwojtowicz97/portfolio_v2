export type TProjects = {
  [key: string]: TProject;
};

export type TFeature = {
  id: string;
  name: string;
  mbPhoto: string;
  ipPhoto?: string;
};

export type TProject = {
  name: string;
  description: string;
  live: string;
  git: string;
  header: string;
  features: TFeature[];
  iPhonePreview?: boolean;
  technologies?: TTechnology[];
};

export type TTechnology = {
  name: string;
  logo?: string;
  url: string;
};

export const technologies: { [key: string]: TTechnology } = {
  typeScript: {
    name: 'TypeScript',
    url: 'https://www.typescriptlang.org/',
  },
  react: {
    name: 'React',
    url: 'https://reactjs.org/',
  },
  next: {
    name: 'Next.js',
    url: 'https://nextjs.org/',
  },
  vue: {
    name: 'Vue 3',
    url: 'https://vuejs.org/',
  },
  nuxt: {
    name: 'Nuxt.js',
    url: 'https://nuxtjs.org/',
  },
  svelte: {
    name: 'Svelte',
    url: 'https://svelte.dev/',
  },
  sveltekit: {
    name: 'SvelteKit',
    url: 'https://sveltekit.vercel.app/',
  },
  angular: {
    name: 'Angular',
    url: 'https://angular.io/',
  },
  tailwind: {
    name: 'Tailwind CSS',
    url: 'https://tailwindcss.com/',
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
  nest: {
    name: 'Nest.js',
    url: 'https://nestjs.com/',
  },
  sql: {
    name: 'MySQL',
    url: 'https://www.mysql.com/',
  },
  java: {
    name: 'Java',
    url: 'https://www.java.com/',
  },
  spring: {
    name: 'Spring Boot',
    url: 'https://spring.io/projects/spring-boot',
  },
  linux: {
    name: 'Linux',
    url: 'https://www.linux.org/',
  },
  nginx: {
    name: 'Nginx',
    url: 'https://nginx.org/',
  },
  elasticsearch: {
    name: 'Elasticsearch',
    url: 'https://www.elastic.co/',
  },
  kafka: {
    name: 'Kafka',
    url: 'https://kafka.apache.org/',
  },
};

export const projects: TProjects = {
  jobFinder: {
    name: 'Job Finder',
    description:
      'The website features a job finding platform that allows users to easily search and apply for job offers, create and manage their CV, browse companies, and read and write reviews. The website is designed to be fully responsive and accessible on both desktop and mobile devices. Users can create accounts and log in to access additional features, such as the ability to add new job offers and view received applications for companies.',
    iPhonePreview: true,
    header: '',
    live: 'https://jobfinder.kamilwojtowicz.com/',
    git: 'https://github.com/kwojtowicz97/job_finder',
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
        ipPhoto: '../assets/ip_jf1.webP',
        mbPhoto: '../assets/mb_jf1.webP',
      },
      {
        id: '2',
        name: 'View job offer details',
        ipPhoto: '../assets/ip_jf2.webP',
        mbPhoto: '../assets/mb_jf2.webP',
      },
      {
        id: '3',
        name: 'Apply for a job offer and send a CV file',
        ipPhoto: '../assets/ip_jf3.webP',
        mbPhoto: '../assets/mb_jf3.webP',
      },
      {
        id: '4',
        name: 'View statuses of send job applications as a personal user',
        ipPhoto: '../assets/ip_jf4.webP',
        mbPhoto: '../assets/mb_jf4.webP',
      },
      {
        id: '5',
        name: 'Create CV with build in builder',
        ipPhoto: '../assets/ip_jf5.webP',
        mbPhoto: '../assets/mb_jf5.webP',
      },
      {
        id: '6',
        name: 'Update personal information and create new company',
        ipPhoto: '../assets/ip_jf6.webP',
        mbPhoto: '../assets/mb_jf6.webP',
      },
      {
        id: '7',
        name: 'View a company details, offers and reviews',
        ipPhoto: '../assets/ip_jf7.webP',
        mbPhoto: '../assets/mb_jf7.webP',
      },
      {
        id: '8',
        name: 'Add a company review',
        ipPhoto: '../assets/ip_jf8.webP',
        mbPhoto: '../assets/mb_jf8.webP',
      },
      {
        id: '9',
        name: 'Save a job offer in favourites',
        ipPhoto: '../assets/ip_jf9.webP',
        mbPhoto: '../assets/mb_jf9.webP',
      },
      {
        id: '10',
        name: 'Search all companies by name and location and see the ones with most offers and the best rated',
        ipPhoto: '../assets/ip_jf10.webP',
        mbPhoto: '../assets/mb_jf10.webP',
      },
      {
        id: '11',
        name: 'Login or create a new account',
        ipPhoto: '../assets/ip_jf11.webP',
        mbPhoto: '../assets/mb_jf11.webP',
      },
      {
        id: '12',
        name: 'Update statuses of recieved job applications as a company',
        ipPhoto: '../assets/ip_jf12.webP',
        mbPhoto: '../assets/mb_jf12.webP',
      },
      {
        id: '13',
        name: 'Create a new job offer',
        ipPhoto: '../assets/ip_jf13.webP',
        mbPhoto: '../assets/mb_jf13.webP',
      },
      {
        id: '14',
        name: "Edit company's informations and upload new logo",
        ipPhoto: '../assets/ip_jf14.webP',
        mbPhoto: '../assets/mb_jf14.webP',
      },
    ],
  },
  kanban: {
    name: 'Kanban Board',
    description:
      'The website allows users to create projects and add lists, such as "to do," "in progress," and "done." Tasks can be added to each list and can be moved between lists by dragging and dropping them. The website also features a switch between Kanban board view and list view. The list view includes filters for easy organization and task management.',
    header: 'Tasks management website',
    live: 'https://kanban.kamilwojtowicz.com/',
    git: 'https://github.com/kwojtowicz97/kanban-board',
    technologies: [
      technologies.react,
      technologies.typeScript,
      technologies.DnD,
      technologies.CSSModules,
    ],
    features: [
      {
        id: '1',
        name: 'Add tasks with title and rich text description to the lists',
        mbPhoto: '../assets/mb_kb1.webP',
      },
      {
        id: '2',
        name: 'Move tasks between lists by draginng and dropping them',
        mbPhoto: '../assets/mb_kb2.webP',
      },
      {
        id: '3',
        name: 'Preview and edit a task by clicking on it',
        mbPhoto: '../assets/mb_kb7.webP',
      },
      {
        id: '4',
        name: 'Collapse a list to make a board more redable',
        mbPhoto: '../assets/mb_kb3.webP',
      },
      {
        id: '5',
        name: 'Add new lists to the board',
        mbPhoto: '../assets/mb_kb4.webP',
      },
      {
        id: '6',
        name: 'Switch board to list view',
        mbPhoto: '../assets/mb_kb5.webP',
      },
      {
        id: '7',
        name: 'Use sorting and filters to find tasks that you are interested in',
        mbPhoto: '../assets/mb_kb6.webP',
      },
    ],
  },
  logicGatesSimulator: {
    name: 'Logic gates simulator',
    description:
      'It is a tool for simulating and experimenting with digital logic circuits. On the website, users can easily add logic gates from the sidebar and connect them using wires to create complex circuit diagrams. The website also features a reusable block functionality, allowing users to save frequently used logic gate combinations for easy access. Additionally, the website includes a project feature, where users can save their circuit diagrams and access them later from local storage.',
    header: 'Website to simulate logic gates systems',
    live: 'https://logicgates.kamilwojtowicz.com/',
    git: 'https://github.com/kwojtowicz97/logic-gates-simulator',
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
        mbPhoto: '../assets/mb_lgs1.webP',
      },
      {
        id: '2',
        name: 'Connect logic gates by dragging a wire between their input and output handles',
        mbPhoto: '../assets/mb_lgs2.webP',
      },
      {
        id: '3',
        name: 'Create reusable blocks from logic gates with named inputs and outputs',
        mbPhoto: '../assets/mb_lgs3.webP',
      },
      {
        id: '4',
        name: 'Create multiple projects',
        mbPhoto: '../assets/mb_lgs4.webP',
      },
      {
        id: '5',
        name: 'Save project to local storage manually or enable autosaving option',
        mbPhoto: '../assets/mb_lgs5.webP',
      },
    ],
  },
  extinguisherManagementSystem: {
    name: 'Fire extinguisher management system',
    description:
      'The fire extinguisher management system website is designed to make managing a large number of extinguishers easier. The website features an interactive map of a building that shows the locations of all the points where extinguishers should be placed. Users can easily check data about each point and extinguisher, including inspection status and assigned extinguisher type. The website also includes a sidebar that lists all potential dangers and warnings, such as overdue inspections or points without extinguishers. Users can also add new points to the map and add new extinguishers, making it easy to keep the fire extinguisher management system up-to-date and accurate.',
    header: 'Website to simulate logic gates systems',
    live: 'https://fems.kamilwojtowicz.com/',
    git: 'https://github.com/kwojtowicz97/extinguisher_management_system',
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
        mbPhoto: '../assets/mb_ems1.webP',
        ipPhoto: '../assets/ip_ems1.webP',
      },
      {
        id: '2',
        name: 'Add new points and extinguishers',
        mbPhoto: '../assets/mb_ems2.webP',
        ipPhoto: '../assets/ip_ems2.webP',
      },
      {
        id: '3',
        name: 'Display and update data about points and extinguishers',
        mbPhoto: '../assets/mb_ems3.webP',
        ipPhoto: '../assets/ip_ems3.webP',
      },
      {
        id: '4',
        name: 'Make inspections',
        mbPhoto: '../assets/mb_ems4.webP',
        ipPhoto: '../assets/ip_ems4.webP',
      },
      {
        id: '5',
        name: 'See all possible dangers and warnings',
        mbPhoto: '../assets/mb_ems5.webP',
        ipPhoto: '../assets/ip_ems5.webP',
      },
    ],
  },
};
