import React, { useEffect, useState } from 'react'
import "./deatail.css"
import { TbCar } from "react-icons/tb";
import { BsBox } from "react-icons/bs";
import { BsFlower1 } from "react-icons/bs";
import { VscCircle } from "react-icons/vsc";
import { HiOutlineArrowDownTray } from "react-icons/hi2";
import { IoShareSocialOutline } from "react-icons/io5";
import { PiLayout } from "react-icons/pi";
import { useParams } from 'react-router-dom';
import Bathmain from '../bath/Bathmain';
import { Beauty } from '../../dataFiles/Beauty';
import { wall } from '../../dataFiles/wall';
import { Accoessories } from '../../dataFiles/Accoessories';
import { lighting } from '../../dataFiles/lighting';
import { furniture } from '../../dataFiles/furniture';
import { data as Bath } from '../bath/bath.js';

const Deatial = () => {
    let { name, id } = useParams();
    const [data, setData] = useState([]);
    let files = [
        Bath,
        furniture,
        lighting,
        Accoessories,
        wall,
        Beauty,
    ];

    useEffect(() => {
        files.forEach((item, index) => {

            for (const element of item.productData) {
                console.log(element.type);
                if (element.type === name) {

                    setData([...data, item.productData[id]]);
                    break;
                }
            }
        });
    }, [id]);
    useEffect(() => {
        console.log(data);
    }, [data])

    return (
        <>
            {
                data.length < 0 ? null : (
                    data.map(({ img, heading, Para }, index) => (
                        <div key={index} className='Deatail_page' id='Deatial'>
                            <div className='product_img'>
                                <img src={img} />
                            </div>
                            <div className='p_deatail_box'>

                                <div className='p_heading'>
                                    <h1>{heading}</h1>
                                    <p><span>MOOOI, 2022</span></p>
                                </div>

                                <div className='p_deatail'>
                                    <div className='heading_sec'>
                                        <h3>{Para} </h3>
                                        <button>Read More</button>
                                    </div>
                                    <div className='heading_section2'>
                                        <h2><span className='icon300'  ><TbCar /></span>Free Shipping</h2>
                                        <h2><span className='icon300' ><BsBox /></span>Easy Returns Within 100 Days</h2>
                                        <h2><span className='icon300'><BsFlower1 /></span>5 Year Warranty after registration</h2>
                                    </div>
                                </div>

                                <div className='btn_section'>
                                    <button className='btn-style'><span><VscCircle /></span>Dimensions</button>
                                    <button className='btn-style'><span><VscCircle /></span>Specs</button>
                                    <button className='btn-style'><span><HiOutlineArrowDownTray /></span></button>
                                    <button className='btn-style'><span><IoShareSocialOutline /></span></button>
                                    <button className='btn-style'><span><PiLayout /></span></button>
                                </div>
                            </div>
                        </div>

                    ))
                )

            }

        </>
    )
}

export default Deatial