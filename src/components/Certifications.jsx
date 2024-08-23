import React from 'react';
import { motion } from 'framer-motion';
import {certificationData} from '../data/data';
import { MdVerified } from "react-icons/md";
import { IoIosRibbon } from "react-icons/io";
const Certifications = () => {
  return <section className='border-b-2 border-solid border-slate-200 ml-5 lg:ml-56 mr-5 flex flex-col flex-wrap lg:mb-35 pt-5 md:pt-20 pb-10 md:pb-20' id='certifications'>
  <motion.h2
  whileInView={{opacity:1,y:0}}
  initial={{opacity:-1,y:-50}}
  transition={{duration:0.5}} 
  className='text-center text-sky-900 uppercase text-4xl tracking-tighter font-light'>Certifications
  </motion.h2>
  <div className='flex flex-wrap justify-center items-center gap-4 gap-y-10 md:gap-y-20 sm:gap-x-20 mt-9 p-10'>
    {
        certificationData.map((certification,id)=>{
            return <div key={id} className='flex flex-col items-center justify-center shadow-2xl pb-6 rounded-xl'>
                <motion.div 
                whileInView={{x:0, opacity:1}}
                initial={{x:-200, opacity:0}}
                transition={{duration:1, delay:0}} 
                className='flex flex-wrap flex-col md:flex-row justify-center items-center md:border-b-2 md:border-sky-300 py-1 w-fit mb-5 ml-1'>
                <div className='flex flex-col md:flex-row items-center justify-center'>
                <IoIosRibbon className='text-3xl mt-0 text-sky-950'/>
                <h2 className='text-xl w-11/12 text-center text-sky-900 font-semibold tracking-tight md:mr-6'>
                    {certification.title}
                </h2>
                </div>
                <motion.div 
                whileHover={{scale:1.3}}
                whileTap={{scale:0.8}}
                transition={{duration:0.2}}
                className='flex flex-nowrap'>
                <a target='_blank' href={certification.CertificateSRC} className='text-lg mt-auto tracking-tighter text-sky-600'>Verify</a>
                <MdVerified className='text-xl mt-1 text-green-600' />
                </motion.div>
                </motion.div>
                <motion.div 
                whileInView={{y:0, opacity:1}}
                initial={{y:100,opacity:0}}
                transition={{duration:1.2, delay:0}}
                className='w-11/12'>
                <img src={certification.ImageSrc}/>
                </motion.div>
            </div>
        })
    }
  </div>
</section>
}

export default Certifications