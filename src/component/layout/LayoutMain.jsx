import React from 'react'
// import Collection from './Layout.jsx'
import { data } from './layout.js'
import Layout from './Layout.jsx';
import "./layout.css"
const LayoutMain = () => {
    console.log(data);
    return (
        <div>
            <>
                <div className='layout__parent' >
                    {data.map((value, index) => {
                        return (
                            <div key={index} >
                                <Layout value={value} />
                            </div>
                        )
                    })}
                </div>
            </>
        </div>
    )
}

export default LayoutMain