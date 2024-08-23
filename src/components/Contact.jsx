import React from 'react';
import { FaLinkedin, FaGithub,FaInstagram  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { delay, motion } from 'framer-motion';

export const Contact = () => {
  return <section className='border-b-2 border-solid border-slate-200 ml-5 lg:ml-56 mr-5 flex flex-col flex-wrap justify-center items-center lg:mb-35 pb-24 pt-32' id='contact'>
    <div className='flex flex-col items-center justify-center'>
      <motion.h1
      whileInView={{x:0,opacity:1,rotate:360}}
      initial={{x:-200,opacity:0}}
      transition={{duration:0.6}}
      className='text-violet-700 font-bold text-6xl md:text-7xl lg:text-8xl tracking-tight mb-10'>SA</motion.h1>
      <motion.h2
      whileInView={{x:0,opacity:1}}
      initial={{x:-200,opacity:0}}
      transition={{duration:1}} 
      className='text-4xl tracking-tight text-sky-900'>Lets Work Together</motion.h2>
      <motion.p 
      whileInView={{x:0,opacity:1}}
      initial={{x:200,opacity:0}}
      transition={{duration:1.5}}
      className='w-1/3 tracking-tight text-right text-base text-sky-700'>Living, learning, & leveling up one day at a time.</motion.p>
      <motion.div 
      whileInView={{y:0,opacity:1}}
      initial={{y:100,opacity:0}}
      transition={{duration:2}}
        className='flex gap-5 text-4xl mx-auto mt-10'>
        <motion.div
        whileHover={{ scale: 1.3}}
        onHoverStart={e => {}}
        onHoverEnd={e => {}}
        whileTap={{ scale: 0.8}}
        transition={{duration:0.2, delay:0}}
        >
        <a target='_blank' href='https://www.linkedin.com/in/sohail-ahmad-45373125a/'><FaLinkedin className='cursor-pointer text-sky-600 '/></a>
        </motion.div>
        <motion.div
        whileHover={{ scale: 1.3}}
        whileTap={{ scale: 0.8}}
        transition={{duration:0.2, delay:0}}
        >
        <a target='_blank' href='https://github.com/sohailk12'><FaGithub className='cursor-pointer text-slate-800 '/></a>
        </motion.div>
        
        <motion.div
        whileHover={{ scale: 1.3}}
        onHoverStart={e => {}}
        onHoverEnd={e => {}}
        whileTap={{ scale: 0.8}}
        transition={{duration:0.2, delay:0}}
        >
        <FaXTwitter className='cursor-pointer text-slate-800 ' />
        </motion.div>
        <motion.div
        whileHover={{ scale: 1.3}}
        onHoverStart={e => {}}
        onHoverEnd={e => {}}
        whileTap={{ scale: 0.8}}
        transition={{duration:0.2, delay:0}}
        >
        <FaInstagram className='cursor-pointer text-rose-700 ' />
        </motion.div>
        </motion.div>
        <p className='mt-28 tracking-tight font-thin text-slate-500'>Handcrafted by me &copy;2024</p>
        <div>
          <p className='font-thin text-neutral-500 text-center px-5'>Coded in <a target='_blank' href='https://code.visualstudio.com/' className='font-medium tracking-tighter hover:text-sky-700'>
             Visual Studio code</a> . Built with <a target='_blank' href='https://react.dev/' className='font-medium tracking-tighter hover:text-sky-700'>react.js</a> and <a target='_blank' href='https://tailwindcss.com/' className='font-medium tracking-tighter hover:text-sky-700'>tailwind CSS</a>, deployed with <a target='_blank' href='https://vercel.com/' className='font-medium tracking-tighter hover:text-sky-700'>Vercel</a></p>
        </div>
    </div>
  </section>
}
