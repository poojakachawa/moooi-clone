import React from 'react'
import "./layout.css"
import { Button } from 'bootstrap';
import { Link } from 'react-router-dom';
const Layout = ({ value }) => {
    console.log(value);
    return (
        <div className='layout_box' style={{ flexDirection: value.direction }}>
            <div className='box_text' style={{ backgroundColor: value.backgroundcolor, color: value.color }} >
                <div className='text'>
                    <h6>{value.heading}</h6>
                    <h1>{value.name}</h1>
                    {value.btnName ?
                        <button className='btn'><span className='underline'>{value.btnName}</span></button>
                        : null
                    }
                </div>

            </div>
            <div className='box_img'>
                <img src={value.img} />
            </div>

        </div>
    )
}

export default Layout