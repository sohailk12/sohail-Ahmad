import React , {useState,useEffect} from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from 'framer-motion';
import {sections} from '../data/data';
import { SiReaddotcv } from "react-icons/si";
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
const MenuVisibilty=()=>{
    return setMenuOpen(!menuOpen)
  }
const handleScroll =()=>{
    const scrollPosition = window.scrollY + window.innerHeight/2;
    sections.forEach(section=>{
        const element = document.getElementById(section.id);
        if(element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition){
            setActiveSection(section.id);
        }
    })
}
useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return ()=>{
        window.removeEventListener('scroll', handleScroll);
    }
},[]);
  return <header>
  <motion.nav
  whileInView={{opacity:1, y:0}}
  initial={{opacity:0, y:-50}}
  transition={{duration:0.8,delay:0}}
  className='w-11/12 md:w-56 pt-6 md:bg-gradient-to-r from-purple-200 via-indigo-100 to-sky-200 md:block left-5 md:left-0 right-5 md:right-0 relative md:h-screen md:fixed top-0 md:px-1'>
    <div className='flex lg:hidden  justify-between'>
    <div className='text-violet-600 font-bold text-4xl tracking-tight md:hidden block hover:text-sky-700 cursor-pointer'>
      <a href='/'>SA</a>
    </div>
    <div className="flex">
    <div className='text-lg pt-1 block md:hidden text-blue-900 mr-1'><SiReaddotcv /></div>
    <a href='https://drive.google.com/file/d/1GYTzpU50sEsFvVxRKDR9uabXLDZZAaHr/view?usp=drive_link' target='_blank' className='text-blue-900 block md:hidden font-light mr-7 text-xl tracking-tight hover:text-violet-600'>Resume</a>
      {
        menuOpen ?<AiOutlineClose  className='text-sky-900 md:hidden text-3xl cursor-pointer hover:text-cyan-950' alt="menu button" onClick={MenuVisibilty}/> :
        <GiHamburgerMenu className='text-sky-900 md:hidden text-3xl cursor-pointer hover:text-cyan-950' alt="menu button" onClick={MenuVisibilty}/>
      }
    </div>
    </div>
    <motion.div 
    whileInView={{opacity:1, x:0}}
    initial={{opacity:0, x:-200}}
    transition={{duration:0.8,delay:0}}
    className='hidden md:block text-2xl font-semibold'>
    <motion.div
    whileInView={{opacity:1,x:0, y:0}}
    initial={{opacity:0,x:-50, y:-50}}
    transition={{duration:0.8,delay:0}}
    className='text-violet-600 font-bold ml-5 mt-6 mb-32 text-4xl tracking-tight hover:text-sky-700 cursor-pointer'>
      <a href='/'>SA</a>
    </motion.div>
    <ul className='flex flex-col gap-y-4'>
        {
            sections.map((section,id)=>{
                return <li key={id} className='flex flex-row group '>
                        <div className='flex py-2 pr-2 rounded-r-full'>
                        <div className={`${activeSection === section.id ? 'border-t-2 border-violet-700 md:w-14':'border-t-2 border-sky-900'} w-6 mt-4 transition-all group-hover:w-14 group-hover:border-violet-700`}></div>
                        <a href={`#${section.id}`} className='text-xl uppercase'>
                        <span className={`${activeSection === section.id ? 'text-violet-800 ':'text-sky-900'} mt-1 font-medium opacity-85 tracking-tighter group-hover:text-violet-700`}>{section.label}</span>
                    </a>

                        </div>
                </li>
            })
        }
    </ul>
    </motion.div>
    <div className={`${menuOpen ? 'block': 'hidden'} lg:hidden flex pt-2`}>
      <ul className='sm:flex text-2xl font-semibold flex-col w-full space-y-1 items-center' onClick={()=>setMenuOpen(false)}>
      {
            sections.map((section,id)=>{
                return <li key={id} className='flex flex-row group border-2 border-sky-300 w-full items-center justify-center'>
                    <a href={`#${section.id}`} className='text-xl uppercase'>
                        <div className='flex py-2 pr-2 rounded-r-full'>
                        <span className={`${activeSection === section.id ? 'text-violet-800 text-2xl':'text-sky-900'} mt-1 font-medium opacity-85 tracking-tighter group-hover:text-violet-700 group-hover:transition-all group-hover:text-2xl`}>{section.label}</span>
                        </div>
                    </a>
                </li>
            })
        }
      </ul>
    </div>
  </motion.nav>
  </header>
}
