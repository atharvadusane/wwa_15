import React from 'react'
import { Link as Linktoo } from 'react-router-dom'
import { Link } from 'react-scroll'

const Navright = ({ openpop_func }) => {
    return (
        <div className='right'>
            <div className="list">
                <div className="nav-about list-item">
                    <Linktoo to={'/'}>Home</Linktoo>
                </div>
                <div className="nav-upcoming-event list-item">
                    <button onClick={openpop_func}>Microsoft Hiring!</button>
                </div>
                <div className="nav-team list-item">
                    <Linktoo to={'/team'}>Profile</Linktoo>
                </div>
                <div className="nav-login list-item">
                    <Linktoo to={"/login"} >Login</Linktoo>
                </div>
            </div>
            
        </div>
    )
}

export default Navright
// to='eventplanner' spy={true} smooth={true} offset={8} duration={500}