import React from 'react'
import { motion } from 'framer-motion'
import { FaHtml5,FaCss3Alt,FaReact,FaBootstrap,FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiVite,SiMui,SiReactrouter  } from "react-icons/si";
import { BiLogoJquery } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";

const iconVariants=(duration)=>({
    initial: {y:-10},
    animate: {
        y:[10,-10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})
export const Experience = () => {
  return <section className='border-b-2 border-solid border-slate-200 ml-5 lg:ml-56 mr-5 flex flex-col flex-wrap lg:mb-35 pt-5 md:pt-28 pb-40' id='skills'> 
    <motion.h2
    whileInView={{opacity:1, y:0}}
    initial={{opacity:0, y:-50}}
    transition={{duration:1.5}}
    className='text-center text-sky-900 uppercase text-4xl tracking-tighter font-light mb-10'>
        Skills
    </motion.h2>
    <motion.h2 
    whileInView={{opacity:1, y:0}}
    initial={{opacity:0, y:50}}
    transition={{duration:0.5,delay:0}}
    className='text-center text-sky-600 text-2xl tracking-tight'>Some of the tools and Technologies I've had used
    </motion.h2>
    <div className="flex flex-wrap items-center justify-center pt-5 sm:mx-auto">
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className='flex flex-wrap gap-7 md:gap-4 md:gap-y-8 justify-center items-center mx-1 md:mx-10 lg:mx-32'>
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-sky-300 p-4 shadow-xl'>
                <FaHtml5 className='text-7xl text-orange-600'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-sky-300 p-4 shadow-xl'>
                <FaCss3Alt className='text-7xl text-sky-700'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-sky-300 p-4 shadow-xl'>
                <IoLogoJavascript  className='text-7xl text-yellow-500'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-sky-300 p-4 shadow-xl'>
                <FaReact   className='text-7xl text-sky-500'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-sky-300 p-4 shadow-xl'>
                <FaBootstrap     className='text-7xl text-purple-600'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-sky-300 p-4 shadow-xl'>
                <BiLogoJquery  className='text-7xl text-blue-600'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-sky-300 p-4 shadow-xl'>
                <SiMui className='text-7xl text-blue-600'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-sky-300 p-4 shadow-xl'>
                <RiTailwindCssFill className='text-7xl text-sky-400'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-sky-300 p-4 shadow-xl'>
                <SiReactrouter  className='text-7xl text-black'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-sky-300 p-4 shadow-xl'>
                <SiVite    className='text-7xl text-yellow-600'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-sky-300 p-4 shadow-xl'>
                <FaGitAlt  className='text-7xl text-orange-600'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-sky-300 p-4 shadow-xl'>
                <IoLogoGithub className='text-7xl text-slate-800'/>
            </motion.div>
        </motion.div>
    </div>
  </section>
}
