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
  header: string
  features: TFeature[]
}

export const projects: TProjects = {
  jobFinder: {
    name: 'Job Finder',
    header: 'Job posting website',
    features: [
      {
        id: '1',
        name: 'Fully responsive design',
        ipPhoto: '../assets/ip_sample.jpeg',
        mbPhoto: '../assets/mb_sample.jpeg',
      },
      {
        id: '2',
        name: 'JWT authorization',
        ipPhoto: '../assets/ip_sample.jpeg',
        mbPhoto: '../assets/mb_sample.jpeg',
      },
      {
        id: '3',
        name: 'Adding job offers',
        ipPhoto: '../assets/ip_sample.jpeg',
        mbPhoto: '../assets/mb_sample.jpeg',
      },
      {
        id: '4',
        name: 'Center',
        ipPhoto: '../assets/ip_sample.jpeg',
        mbPhoto: '../assets/mb_sample.jpeg',
      },
      {
        id: '5',
        name: 'Applying for the job',
        ipPhoto: '../assets/ip_sample.jpeg',
        mbPhoto: '../assets/mb_sample.jpeg',
      },
    ],
  },
}
