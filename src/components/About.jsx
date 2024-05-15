import React from 'react'
import aboutImg from "../assets/memoji1.png"
import "./About.css"
import {motion} from "framer-motion"

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h1 className='my-20 text-center text-4xl'>About <span className='text-neutral-500'>Me</span></h1>
        <div className="flex flex-wrap">
            <motion.div
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:0.5}}
            className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center about">
                    <img  src={aboutImg} alt="" />
                </div>
            </motion.div>
            <motion.div
             whileInView={{opacity:1,x:0}}
             initial={{opacity:0,x:100}}
             transition={{duration:0.8}}
            className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <p className="my-2 max-w-xl py-6 "> I'm Muhamed Rafsal, a passionate Full Stack Developer with a Bachelor's degree in Computer Science from APJ Abdul Kalam Technical University in 2023. With a keen interest in both frontend and backend development, I specialize in crafting dynamic and user-friendly web applications.<br/>My journey in the tech world began with a fascination for coding, and since then, I've honed my skills in various programming languages and frameworks to bring ideas to life in the digital realm. I thrive on challenges and love diving into new technologies to stay at the forefront of innovation. Whether it's creating sleek user interfaces or architecting robust backend systems, I'm committed to delivering high-quality solutions that make a difference. Let's collaborate and turn your ideas into reality!</p>
                </div>
            </motion.div>
        
        </div>
    </div>
  )
}

export default About