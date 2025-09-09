import { motion } from "framer-motion";
import { SiReaddotcv } from "react-icons/si";

export const NavTop = () => {
    return <motion.div 
    whileInView={{opacity:1, y:0}}
    initial={{opacity:0, y:-50}}
    transition={{duration:1,delay:0}}
    className='hidden md:flex py-1 fixed top-0 left-56 w-10/12 z-50'>
      <ul className='flex gap-5 mr-10 ml-auto px-0 py-4'>
        <li className='flex gap-1'>
        <div className='text-lg pt-1 text-blue-900'><SiReaddotcv /></div>
          <a href='https://drive.google.com/file/d/1GYTzpU50sEsFvVxRKDR9uabXLDZZAaHr/view?usp=drive_link' target='_blank' className='text-blue-900 font-light text-xl tracking-tight hover:text-violet-600'>Resume</a>
        </li>
        <li><a href='mailto:sa492284@gmail.com' className='border-2 border-violet-600 text-violet-600 text-xl shadow-xl tracking-tighter py-2 px-4 rounded-3xl hover:bg-violet-600 hover:text-white'>Say Hello</a></li>
      </ul>
    </motion.div>
}