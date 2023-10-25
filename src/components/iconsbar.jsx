import React from 'react'
import { Link as Linktoo } from 'react-router-dom'
import { Link } from 'react-scroll'

const Iconsbar = () => {
  return (
    <div className='iconsbar'>
        <div className="aim iconsbar-item">
            <Link to='footer' spy={true} smooth={true} offset={8} duration={500}><img src="Moving forward-amico.png" alt="" width="200px"/></Link>
            <span>Top skills</span> 
        </div>
        <div className="iconsbar-recruitment iconsbar-item">
            <Linktoo to={'/recruitment'}><img src="handshake.png" alt="" width="200px"/></Linktoo>  
            <span>Get hired</span>
        </div>
        {/* <div className="team iconsbar-item">
            <Linktoo to={'/team'} ><img src="forming-team-leadership.gif" alt="" width="200px"/></Linktoo>
            <span>Team</span>
        </div> */}
        <div className="events iconsbar-item">
            <Linktoo to={'/events'}><img src="Work-anniversary-rafiki.png" alt="" width="200px"/></Linktoo>
            <span>Connect</span>
        </div>
        <div className="gallery iconsbar-item">
            <Linktoo to={'/photogallery'}><img src="Image-folder-cuate.png" alt="" width="200px"/></Linktoo>
            <span>Upload resume</span>
        </div>
    </div>
  )
}

export default Iconsbar