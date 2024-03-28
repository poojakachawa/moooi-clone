import React from 'react'
import "./footer.css"
import { FaArrowUp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaVimeo } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
const Footer = () => {
    return (
        <section className='footer_section'>

            <div className='top_footer'>
                <div className='box1'>
                    <button className='btn_style'>
                        <label>Europe</label>

                    </button>
                    <span><FaArrowUp /></span>
                </div>
            </div>

            <div className='center_footer'>
                <div>
                    <h2>
                        <span>Store Locator</span>
                        <span>Material Library</span>
                        <span>Shipping & Returns</span>
                        <span>FAQ</span>

                    </h2>
                </div>
                <div>
                    <h2>
                        <span>Newsletter</span>
                        <span>Press Area</span>
                        <span>Jobs</span>
                    </h2>
                </div>

            </div>

            <div className='bottom_foooter'>
                <div className="icon_box">

                    <span><FaPinterest /></span>
                    <span><FaInstagram /></span>
                    <span><FaVimeo /></span>
                    <span><FaLinkedin /></span>
                    <span><FaFacebook /></span>
                    <span><FaWifi /></span>
                </div>
                <div className="menu_box">
                    <nav>
                        <ul>
                            <li>Disclaimer</li>
                            <li>Cookie Policy</li>
                            <li>
                                General Conditions</li>
                            <li>
                                Privacy Statement</li>
                            <li>©2024 Moooi</li>
                        </ul></nav>
                </div>
            </div>

        </section>
    )
}

export default Footer