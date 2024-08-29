import RWD from '../assets/certifications/RWD.png'
import JADS from '../assets/certifications/JADS.png'
import project1 from '../assets/projects/taskwizard3.png';
export const certificationData = [
    {
        "title": "Responsive Web Design",
        "ImageSrc":RWD,
        "CertificateSRC":"https://freecodecamp.org/certification/fcc159f64f2-be7e-4bd2-8f04-763982b6c3b5/responsive-web-design"
    },
    {
        "title": "JavaScript Algorithms and Data Structures",
        "ImageSrc":JADS,
        "CertificateSRC":"https://freecodecamp.org/certification/fcc159f64f2-be7e-4bd2-8f04-763982b6c3b5/javascript-algorithms-and-data-structures-v8"
    }
    
]

export const ProjectData = [
    {
      "title": "TaskWizard App",
      "imageSrc": project1,
      "description": "This app can add daily routine tasks. We can update and delete the current task as well it is made on the front-end side.",
      "skills": ["React", "Chakra-UI", "Html","Css","JavaScript"],
      "demo": "https://taskwizard-tw.vercel.app/",
      "source": "https://github.com/sohailk12/TaskWizard"
    },
    {
      "title": "Random Quote Machine",
      "imageSrc": "https://cdn.freecodecamp.org/testable-projects-fcc/images/random-quote-machine.png",
      "description": "This is a project made to learn the latest languages by building an app.",
      "skills": ["React", "Express", "Node", "Sass"],
      "demo": "https://www.example.com",
      "source": "https://www.github.com"
    },
    {
      "title": "Map Data Across the Globe",
      "imageSrc": "https://cdn.freecodecamp.org/testable-projects-fcc/images/map.jpg",
      "description": "This is a project made to learn the latest languages by building an app.",
      "skills": ["React", "Express", "Node"],
      "demo": "https://www.example.com",
      "source": "https://www.github.com"
    },
    {
      "title": "Tic Tac Toe Game",
      "imageSrc": "https://cdn.freecodecamp.org/testable-projects-fcc/images/tic-tac-toe.png",
      "description": "This is a project made to learn the latest languages by building an app.",
      "skills": ["React", "Express", "Node"],
      "demo": "https://www.example.com",
      "source": "https://www.github.com"
    }
  ]
  export const sections = [
    {id: 'about', label:'About'},
    {id: 'skills', label:'Skills'},
    {id: 'projects', label:'Projects'},
    {id: 'certifications', label:'Certifications'},
    {id: 'contact', label:'Contact'},

]