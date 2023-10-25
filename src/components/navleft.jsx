import React from 'react'
import { Link } from 'react-router-dom'


const Navleft = () => {
    return (
        <div>
            <div className='left'>
                <div className="head--logo">
                    <Link to={'/'} ><img src="122.jpg" alt="sps logo" width="70px" height="55px" /></Link>
                </div>
                <div className="head">
                    <Link to={'/'} >jobs_here.com</Link>
                </div>
            </div>
        </div>
    )
}

export default Navleft