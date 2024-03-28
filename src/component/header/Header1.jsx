import React from 'react'
import './header.css';
import { AiFillAudio } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { AiOutlineLayout } from "react-icons/ai";
import { TfiBag } from "react-icons/tfi";
const Header1 = () => {
  return (
    
    <>
     <header className='top_header'>
        <a><AiFillAudio /></a>
        <span>Moooi</span>
        <nav >
            <ul>
                <li><a><BsSearch /></a></li>
                <li><a><AiOutlineLayout /></a></li>
                <li><a><TfiBag /></a></li>
            </ul>
            </nav>
     </header>
    </>
   


  )
}

export default Header1