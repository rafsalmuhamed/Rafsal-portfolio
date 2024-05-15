import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb } from "react-icons/si";
import { DiAngularSimple } from "react-icons/di";
import { RiNodejsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import {motion} from "framer-motion"

const iconVariants = (duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse",
        },
    },

})
const Technologies = () => {
  return (
    <motion.div
    whileInView={{opacity:1,y:0}}
    initial={{opacity:0,y:-100}}
    transition={{duration:1.5}}
    className='border-b border-neutral-800 pb-24'>
        <h1 className='my-20 text-center text-4xl'>Technologies</h1>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">

            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
           
            <motion.div
             variants={iconVariants(6)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                < DiAngularSimple className='text-7xl text-red-700'/>
            </motion.div>
            <motion.div
             variants={iconVariants(3)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className='text-7xl text-green-500'/>
            </motion.div>
            <motion.div
             variants={iconVariants(5)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiExpress className='text-7xl text-black-500'/>
            </motion.div>
            <motion.div
             variants={iconVariants(2)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiNodejsLine className='text-7xl text-green-500'/>
            </motion.div>
            <motion.div
             variants={iconVariants(5)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandFramerMotion className='text-7xl text-pink-600'/>
            </motion.div>
            
            
            <motion.div
             variants={iconVariants(7)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPostman style={{background:'white',borderRadius:'50%'}}  className='text-7xl text-orange-400'/>
            </motion.div>
        </motion.div>

    </motion.div>
  )
}

export default Technologies