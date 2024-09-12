import React from 'react'
import {ProjectData} from '../../data/data'
import { ProjectCard } from './ProjectCard'
import { motion } from 'framer-motion'
export const Projects = () => {
  return <section className='border-b-2 border-solid border-slate-200 ml-5 md:ml-56 mr-5 flex flex-col flex-wrap lg:mb-35 pb-20 pt-5 md:pt-14' id='projects'>
    <motion.h2
    whileInView={{y:0,opacity:1 }}
    initial={{y:-50,opacity:0}}
    transition={{duration:0.5, delay:0}} 
    className='text-center text-sky-900 uppercase text-4xl tracking-tighter font-light'>Projects
    </motion.h2>
    <div className='flex flex-wrap justify-start items-start gap-4 gap-y-10 md:gap-y-16 sm:gap-x-20 mt-9 p-10 pt-0'>
        {
            ProjectData.map((project,id)=>{
                return <ProjectCard key={id} project={project}/>
            })
        }
    </div>
  </section>
}
