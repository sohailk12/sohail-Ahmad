import React, { useState } from 'react';
import { motion } from 'framer-motion';
export const ProjectCard = ({project :{title,imageSrc ,description,skills,demo,source}}) => {
  const [toggleImage, setToggleImage] = useState(false);
  console.log(toggleImage)
  return <div className='flex flex-row flex-wrap items-center justify-center overflow-hidden gap-x-32 shadow-lg rounded-lg'>
    <motion.div 
    whileInView={{opacity:1, x:0}}
    initial={{opacity:0, x:-100}}
    transition={{duration:0.8}}
    className={`${toggleImage ? 'bg-slate-900': 'opacity-100'} flex flex-col items-center justify-center w-5/6 lg:w-1/4 mb-7 lg:shadow-2xl hover:cursor-pointer group`}
    onClick={()=>setToggleImage(!toggleImage)} onMouseEnter={()=>setToggleImage(!toggleImage)} onMouseLeave={()=>setToggleImage(false)}>
    <img
    className={`${toggleImage ? 'opacity-10': 'opacity-100'} w-fit md:w-auto`} src={imageSrc} alt={`Image of ${title}`} />
    <div className='absolute gap-9 justify-center items-center mb-4 w-3/5 lg:w-1/5 pt-5'>
    <div className='flex items-center justify-center gap-10 md:gap-6'>
    <motion.a
    whileInView={{opacity:1, x:0,y:0}}
    whileHover={{scale:1.2}}
    whileTap={{ scale: 0.8}}
    initial={{opacity:0, x:50,y:50}}
    transition={{duration:0.3}} 
    href={source} className={`${toggleImage ? 'block': 'hidden'} bg-sky-500  text-xl font-medium tracking-tight text-white px-2 py-1 rounded-full`}>Source
    </motion.a>
    <motion.a
    whileInView={{opacity:1, x:0,y:0}}
    whileHover={{scale:1.2}}
    whileTap={{ scale: 0.8}}
    initial={{opacity:0, x:-50,y:50}}
    transition={{duration:0.3}}
    href={demo} className={`${toggleImage ? 'block': 'hidden'} bg-violet-600 text-xl font-medium tracking-tight text-white px-2 py-1 rounded-full`}>Demo
    </motion.a>
    </div>
    </div>
    </motion.div>
    <motion.div 
    whileInView={{opacity:1, x:0}}
    initial={{opacity:0, x:100}}
    transition={{duration:1}}
    className='flex flex-col w-5/6 lg:w-auto gap-y-0 p-2'>
    <h3 className='text-xl tracking-tight text-sky-900 mb-2 font-semibold'>{title}</h3>
  <p className='text-lg tracking-tight text-sky-600 mb-4'>{description}</p>
  <ul className='flex gap-4 flex-wrap'>
      {
          skills.map((skill,id)=>{
              return <li key={id} className='text-white text-lg bg-blue-500 px-2 font-light rounded-3xl'>{skill}</li>
          })
      }
  </ul>
    </motion.div>
</div>
}
