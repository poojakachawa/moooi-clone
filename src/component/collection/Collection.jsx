import React from 'react'
import "./collection.css"
import { Link } from 'react-router-dom'
const Collection = ({ value }) => {

    return (
        <div>

            <div className='box_collection'>
                <div className='box'>
                    <Link  to={`/${value.name}`}>
                        <img src={value.img} />
                        <p>{value.name}</p>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Collection