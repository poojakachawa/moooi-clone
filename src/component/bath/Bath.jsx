import React from 'react'

import "./bath.css"
const Bath = ({ value }) => {
    console.log(value);
    return (
        <div className='products'>
            <div className='contain_box'>
                <button className='bttnn_style'><span>{value}</span></button>

            </div>
        </div>
    )
}

export default Bath