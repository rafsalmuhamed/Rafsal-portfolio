import React from 'react'
import "./Education.css"
import {motion} from "framer-motion"

const Education = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        className='my-20 text-center text-4xl'>Education & Experience</motion.h1>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.3}}
        style={{textAlign:'center', marginBottom:'30px'}}>
            
            <div className=' text-sm text-neutral-400'>2023-Present</div>
          <div>
             <h6 className='mb-2 font-semibold'>  Internship Trainee</h6>
           <p className='cont'>Luminar Technolab Pvt.Ltd</p>
           </div>
           </motion.div>
           <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:1.3}}
           style={{textAlign:'center', marginBottom:'30px'}}>
            
            <div className='text-sm text-neutral-400'>2019- 2023</div>
          <div>
             <h6 className='mb-2 font-semibold'>  Bachelor of Technology</h6>
           <p className='cont'>APJ Abdul Kalam Technical University</p>
           <p className='cont'>Computer Science And Engineering</p>
           </div>
           </motion.div>
           <motion.div
           whileInView={{opacity:1,x:0}}
           initial={{opacity:0,x:-100}}
           transition={{duration:1.3}}
           style={{textAlign:'center', marginBottom:'30px'}}>
            
            <div className='text-sm text-neutral-400'>2017- 2019</div>
          <div>
             <h6 className='mb-2 font-semibold'> Higher Secondary School</h6>
           <p className='cont'>National Higher Secondary School</p>
           </div>
           </motion.div>
           <motion.div
           whileInView={{opacity:1,x:0}}
           initial={{opacity:0,x:100}}
           transition={{duration:1.3}}
           style={{textAlign:'center', marginBottom:'50px'}}>
            
            <div className='text-sm text-neutral-400'>2016- 2017</div>
          <div>
             <h6 className='mb-2 font-semibold'> High School</h6>
           <p className='cont'>Majlis Higher Secondary School</p>
           </div>
           </motion.div>
       

    </div>
    
  )
}

export default Education