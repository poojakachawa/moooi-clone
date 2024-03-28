import React, { useState } from 'react'
import "./menu.css"
const Menu = ({ obj, show }) => {

    return (

        <div className='menu_btn' >
            <button className='btn_design' onClick={() => obj()}>{
                show ? "Close" : "Menu"
            }</button>
        </div >
    )
}

export default Menu