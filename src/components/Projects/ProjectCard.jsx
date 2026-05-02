import  { useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export const ProjectCard = ({project :{title,imageSrc ,description,skills,demo,source}}) => {
  const [toggleImage, setToggleImage] = useState(false);
  console.log(toggleImage)
  return <motion.div 
  whileInView={{y:0, opacity:1}}
                    initial={{y:100,opacity:0}}
                    transition={{duration:1.5, delay:0}}
  className='flex flex-row flex-wrap items-center justify-center overflow-hidden gap-x-32 shadow-lg rounded-lg'>
    <div 
    
    className={`${toggleImage ? 'bg-slate-900': 'opacity-100'} flex flex-col items-center justify-center w-5/6 lg:w-1/4 mt-6 mb-7 lg:shadow-2xl hover:cursor-pointer group`}
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
    href={source} target='_blank' className={`${toggleImage ? 'block': 'hidden'} bg-sky-500  text-xl font-medium tracking-tight text-white px-2 py-1 rounded-full`}>Source
    </motion.a>
    <motion.a
    whileInView={{opacity:1, x:0,y:0}}
    whileHover={{scale:1.2}}
    whileTap={{ scale: 0.8}}
    initial={{opacity:0, x:-50,y:50}}
    transition={{duration:0.3}}
    href={demo} target='_blank' className={`${toggleImage ? 'block': 'hidden'} bg-violet-600 text-xl font-medium tracking-tight text-white px-2 py-1 rounded-full`}>Visit
    </motion.a>
    </div>
    </div>
    </div>
    <div 
    className='flex flex-col w-5/6 lg:w-1/2 gap-y-0 p-2'>
    <h3 className='text-xl tracking-tight text-sky-900 mb-2 font-semibold'>{title}</h3>
  <p className='text-lg tracking-tight text-sky-600 mb-4'>{description}</p>
  <ul className='flex gap-4 flex-wrap w-fit'>
      {
          skills.map((skill,id)=>{
              return <li key={id} className='text-white text-lg bg-blue-500 px-2 font-light rounded-3xl'>{skill}</li>
          })
      }
  </ul>
    </div>
</motion.div>
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    demo: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
  }).isRequired,
};
