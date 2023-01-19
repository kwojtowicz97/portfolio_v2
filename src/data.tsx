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
  header: string
  features: TFeature[]
  iPhonePreview?: boolean
}

export const projects: TProjects = {
  jobFinder: {
    name: 'Job Finder',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat itaque neque maxime suscipit, magnam, odit aliquid ipsa nihil, nam laborum illo mollitia officia est. Accusamus maxime non impedit dicta odit fugiat dolor commodi, suscipit, minus hic blanditiis, est beatae voluptates possimus! Ea, consequatur corrupti dolorum beatae sunt perferendis fugiat fuga!',
    header: 'Job posting website',
    iPhonePreview: true,
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
    description: '',
    header: 'Website to simulate logic gates systems',
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
}
