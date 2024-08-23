import React from 'react'
import { FaLinkedin, FaGithub,FaInstagram  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { motion } from "framer-motion";
import ProfilePic from '../assets/profile.png';
const container =(delay)=>({
  hidden: {x: -200, opacity:0},
  visible: {
    x: 0,
    opacity: 1,
    transition: {duration:0.5, delay: delay}
  } 
})
export const Hero = () => {
  return <section className='border-b-2 border-solid border-slate-200 ml-5 md:ml-56 mr-5 flex flex-wrap flex-col lg:mb-35 pb-20 pt-4' id='about'>
    <motion.div 
    whileInView={{opacity:1, y:0}}
    initial={{opacity:0, y:-50}}
    transition={{duration:1,delay:0}}
    className='hidden md:flex justify-end mb-20 py-2'>
      <ul className='flex gap-5 pr-5'>
        <li><a href='https://drive.google.com/file/d/1GYTzpU50sEsFvVxRKDR9uabXLDZZAaHr/view?usp=drive_link' target='_blank' className='text-blue-900 font-light text-xl tracking-tight hover:text-violet-600'>Resume</a></li>
        <li><a href='mailto:sa492284@gmail.com' className='border-2 border-violet-600 text-violet-600 text-xl shadow-xl tracking-tighter py-2 px-4 rounded-3xl hover:bg-violet-600 hover:text-white'>Say Hello</a></li>
      </ul>
    </motion.div>
    <div className='flex flex-wrap'>
    <div className='flex lg:w-1/2 flex-col items-center lg:items-start pb-24 gap-y-4'>
        <motion.h1 
        variants={container(0.2)}
        initial="hidden"
        animate="visible"
        className='text-6xl text-sky-900 font-extralight tracking-tighter pb-14 pt-10 ml-10'>Sohail Ahmad</motion.h1>
        <motion.span 
        variants={container(0.5)}
        initial="hidden"
        animate="visible"
        className='bg-gradient-to-r from-teal-900 via-sky-500 to-violet-700 bg-clip-text pl-7 text-4xl tracking-tight text-transparent font-light'>Front-end-developer
        </motion.span>
        <motion.p 
        variants={container(1)}
        initial="hidden"
        animate="visible"
        className='lg:py-6 text-sky-700 tracking-tight font-light text-lg md:px-3 text-center'>a Front-end Web Developer with a one year of experience using react js. Reach out if you like to learn more!
        </motion.p>
        <motion.div 
        variants={container(1.5)}
        initial="hidden"
        animate="visible"
        className='flex gap-5 text-4xl mx-auto'>
        <motion.div
        whileHover={{ scale: 1.3 }}
        onHoverStart={e => {}}
        onHoverEnd={e => {}}
        whileTap={{ scale: 0.8}}
        transition={{duration:0.2, delay:0}}
        >
        <a target='_blank' href='https://www.linkedin.com/in/sohail-ahmad-45373125a/'><FaLinkedin className='cursor-pointer text-sky-600 '/></a>
        </motion.div>
        <motion.div
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.8}}
        transition={{duration:0.2, delay:0}}
        >
        <a target='_blank' href='https://github.com/sohailk12'><FaGithub className='cursor-pointer text-slate-800 '/></a>
        </motion.div>
        <motion.div
        whileHover={{ scale: 1.3 }}
        onHoverStart={e => {}}
        onHoverEnd={e => {}}
        whileTap={{ scale: 0.8}}
        transition={{duration:0.2, delay:0}}
        >
        <IoLogoYoutube className='cursor-pointer text-red-700 ' />
        </motion.div>
        <motion.div
        whileHover={{ scale: 1.3 }}
        onHoverStart={e => {}}
        onHoverEnd={e => {}}
        whileTap={{ scale: 0.8}}
        transition={{duration:0.2, delay:0}}
        >
        <FaXTwitter className='cursor-pointer text-slate-800 ' />
        </motion.div>
        <motion.div
        whileHover={{ scale: 1.3 }}
        onHoverStart={e => {}}
        onHoverEnd={e => {}}
        whileTap={{ scale: 0.8}}
        transition={{duration:0.2, delay:0}}
        >
        <FaInstagram className='cursor-pointer text-rose-700 ' />
        </motion.div>
        </motion.div>
    </div>
    <div className='opacity-80 rounded-xl w-2/5 h-fit mx-auto my-auto'>
    <motion.img 
    initial={{x:200, opacity:0}}
    animate={{x:0, opacity:1,rotate: -360}}
    transition={{duration:0.3, delay:1.6}}
    className='rounded-full border-8 border-l-lime-400 border-t-sky-400 border-r-violet-400 border-b-orange-400 w-11/12 h-fit' src={ProfilePic} alt='Porfile Image'/>
    </div>
    </div>
  </section>
}
