import React from 'react'
import logo from "../assets/logor.png"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaSquareXTwitter} from "react-icons/fa6"
import {FaInstagram} from "react-icons/fa"
import "./Navbar.css"



const Navbar = () => {
  return (
    <nav  className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center logo'>
            <img  src={logo} alt="" />
            
        </div>
        <div className=' flex items-center justify-center text-2xl icongap'>
            <a href='https://www.linkedin.com/in/muhamed-rafsal-ameen/' target='_blank'><FaLinkedin  /></a>
            <a href='https://github.com/rafsalmuhamed' target='_blank'><FaGithub /></a>
            <a href='https://www.instagram.com/raffsal/' target='_blank'><FaInstagram /></a>
            <FaSquareXTwitter/>

        </div>
    </nav>
  )
}

export default Navbar