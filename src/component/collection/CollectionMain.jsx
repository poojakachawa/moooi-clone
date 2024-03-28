import React from 'react'
import Collection from './Collection.jsx'
import { data } from './collection.js'
import "./collection-main.css"
const CollectionMain = () => {
    return (
        <>
            <h4 style={{ textAlign: "center", fontFamily: "sans-serif", padding: "0px 0px 40px 0px" }}>BROWSE OUR COLLECTION</h4>
            <div className="d__flex">
                {data.map((value, index) => {
                    return (
                        <div key={index} >

                            <Collection value={value} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default CollectionMain