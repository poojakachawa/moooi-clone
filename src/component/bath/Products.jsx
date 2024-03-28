import React from 'react'
import "./bath.css"
import { Link } from 'react-router-dom'
const Products = ({ value, index }) => {
    return (
        <>
            <Link className='product_box1' to={`/Detail/${value.type}/${index}`} >
                <div className='product_box1' key={index}>
                    <img src={value.img} />
                    <div className='product__details'>  <h4>{value.name}</h4>
                        <p>{value.price}</p></div>
                </div>
            </Link>

        </>
    )
}

export default Products