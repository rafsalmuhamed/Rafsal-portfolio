import React from 'react'
import "./Hero.css"
import profile from "../assets/memoji.png"
import {motion} from "framer-motion";

const container = (delay)=>({
    hidden:{x:-100, opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5,delay},
    },


})

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className="content flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"

                    
                    className='pb-16 text-5xl tracking-tight lg:mt-16 lg:text-8xl'>Hello, I'm Rafsal<span className='dot-span' style={{color:'#a24cb5'}}>.</span></motion.h1>
                    <motion.span
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"

                     style={{letterSpacing:'2px'}} 
                     className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">I'm  a Full Stack Developer.</motion.span>
                     <motion.p
                     variants={container(1)}
                     initial="hidden"
                     animate="visible"

                     style={{letterSpacing:'2px'}} className='my-2 max-w-xl py-6 font-light tracking-tighter '>I'm an Enthusiastic Full Stack Developer and Software Engineer skilled in both making websites look good and building the behind-the-scenes stuff that makes them work smoothly. I'm great at understanding what a business needs and turning it into practical solutions, working well with others to create top-quality products.</motion.p>

                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center profile'>
                    <motion.img
                    initial={{x:100,opacity:0}}
                    animate={{x:0,opacity:1}}
                    transition={{duration:1,delay:1.2}}
                    src={profile} alt="rafsal" />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Hero
