import React from 'react'
import Bath from './Bath.jsx'
import "./bath.css"

import Products from './Products.jsx'
import { Link } from 'react-router-dom'

const Bathmain = ({ productData }) => {
    // console.log(productData);
    return (
        <>

            <div className='Main_container'>
                <div className='heading_box'>
                    <h1>{productData.heading}</h1>
                    <p>{productData.para} </p>
                </div>

                <div className='btn_hendling'>
                    {productData.btn.map((value, index) => {
                        console.log(value);
                        return (
                            <div key={index} >
                                <Bath value={value} />
                            </div>
                        )
                    })}
                </div>
                <div className='flex__container'>
                    {productData.productData.map((value, index) => {
                        console.log(index);
                        return (
                            // <Link to={`/Detail/name/id`} >
                            <Products value={value} key={index} index={index} />
                            // {/* </Link> */}

                        )
                    })}
                </div>
                <div className='last_content'>
                    <h5>OUR SUGGESTIONS</h5>
                    <p> Turn more dreams into reality.  </p>
                    <p>  See more types of Bedding & Bath</p>
                    <div className='btn_hendling'>
                        {productData.btn.map((value, index) => {
                            console.log(value);
                            return (
                                <div key={index} >
                                    <Bath value={value} />
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>


        </>
    )
}

export default Bathmain