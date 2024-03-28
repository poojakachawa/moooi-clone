import React from 'react'
import "./Menu_section.css"
import { FaSearch } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
const Menu_section = () => {
    return (
        <div className='Menu_desgin'>
            <div className='search_section'>
                <span><FaSearch /></span>
                <input type='text' placeholder='Search for products, stories'></input>
                <span><FaMicrophone /></span>
            </div>
            <div className='bottom_menu'>
                <ul>
                    <li><span>Products</span></li>
                    <li><span>Stories</span></li>
                    <li><span>Gift guid</span></li>
                </ul>
            </div>
            <div className='List_menu'>
                <ul>
                    <li> <span>Home</span></li>
                    <li> <span>About Us</span></li>
                    <li>  <span>Store Locator</span></li>
                    <li>  <span>Login</span></li>
                    <li><span>Contact</span></li>
                </ul>
            </div>
        </div>
    )
}

export default Menu_section