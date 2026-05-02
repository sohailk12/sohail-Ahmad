import RWD from '../assets/certifications/RWD.png'
import JADS from '../assets/certifications/JADS.png'
import hplifeAi from '../assets/certifications/AI-hplife.png'
import project1 from '../assets/projects/moviepulse.png'
import project2 from '../assets/projects/gitdiscover.png';
import project3 from '../assets/projects/taskwizard.png';
export const certificationData = [
    {
        "title": "Ai for Business professionals",
        "ImageSrc":hplifeAi,
        "CertificateSRC":"https://www.life-global.org/certificate/336d1eb8-6079-433a-b965-010d22d8c31c"
    },
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
      "title": "MoviePulse",
      "imageSrc": project1,
      "description": "Movie Pulse is a modern movie discovery platform built with React that allows users to explore trending and popular films in real time. The application integrates external APIs to deliver dynamic content, enabling users to search for movies and view detailed information through a clean and intuitive interface.",
      "skills": ["React", "TailwindCSS","Appwrite","JavaScript","html","css"],
      "demo": "https://pulsemovie.netlify.app/",
      "source": "https://github.com/sohailk12/Movie-Pulse"
    },
    {
      "title": "GitDiscover",
      "imageSrc": project2,
      "description": "This app is build to explore GitHub Repositories and GitHub Users information. Using code splitting and dynamic routing. The Loading speed of this app is optimized and faster.",
      "skills": ["React", "Material-UI", "React-Router","JavaScript","html","css"],
      "demo": "https://gitdiscover.netlify.app/",
      "source": "https://github.com/sohailk12/gitdiscover"
    },
    {
      "title": "TaskWizard App",
      "imageSrc": project3,
      "description": "In this app we can add daily routine tasks. We can also update and delete the task as well, it is made on the front-end side for testing DOM manipulation.",
      "skills": ["React", "Chakra-UI", "JavaScript", "html","css"],
      "demo": "https://taskwizard-tw.vercel.app/",
      "source": "https://github.com/sohailk12/TaskWizard"
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