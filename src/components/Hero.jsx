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
  return <section className='border-b-2 border-solid border-slate-200 
  ml-5 mr-5 flex flex-wrap flex-col lg:mb-35 pb-20 pt-12' id='about'>
    
    <div className='flex flex-wrap'>
    <div className='flex lg:w-1/2 flex-col items-center lg:items-start pb-24 gap-y-4'>
        <motion.h1 
        variants={container(0.2)}
        initial="hidden"
        animate="visible"
        className='text-5xl md:text-6xl text-sky-900 font-extralight tracking-tighter pt-10 ml-10'>Sohail Ahmad</motion.h1>
        <motion.span 
        variants={container(0.5)}
        initial="hidden"
        animate="visible"
        className='bg-gradient-to-r from-teal-900 via-sky-500 to-violet-700 bg-clip-text pl-7 text-4xl tracking-tight text-transparent font-light'>MERN Developer
        </motion.span>
        <motion.p 
        variants={container(1)}
        initial="hidden"
        animate="visible"
        className='lg:py-6 text-sky-700 tracking-tight font-light text-lg md:px-3 text-center'>MERN Stack Developer with one year of hands-on experience in building dynamic and responsive web applications using MongoDB, Express.js, React.js, and Node.js. Passionate about creating user-friendly, performant solutions, and always eager to learn and implement the latest technologies. Reach out if you&#39;d like to learn more!
        </motion.p>
        <motion.div 
        variants={container(1.5)}
        initial="hidden"
        animate="visible"
        className='flex gap-5 text-4xl mx-auto'>
        <motion.div
        whileHover={{ scale: 1.3 }}
        
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
        
        whileTap={{ scale: 0.8}}
        transition={{duration:0.2, delay:0}}
        >
        <IoLogoYoutube className='cursor-pointer text-red-700 ' />
        </motion.div>
        <motion.div
        whileHover={{ scale: 1.3 }}
        
        whileTap={{ scale: 0.8}}
        transition={{duration:0.2, delay:0}}
        >
        <FaXTwitter className='cursor-pointer text-slate-800 ' />
        </motion.div>
        <motion.div
        whileHover={{ scale: 1.3 }}
        
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
    className='rounded-full border-8 border-l-lime-400 border-t-sky-400 border-r-violet-400 border-b-orange-400 w-11/12 object-cover aspect-square' src={ProfilePic} alt='Porfile Image'/>
    </div>
    </div>
  </section>
}
