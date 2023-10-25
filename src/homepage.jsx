import React from 'react'
import Iconsbar from './components/iconsbar'
import Testimonial from './components/testimonial'
import Footer from './components/footer'

const Homepage = () => {
    const slide_images=[
        {url:"pccoe.webp", id:1},
        {url:"1.webp", id:2},
        {url:"2.webp", id:3},
        {url:"3.webp", id:4},
        {url:"004.webp", id:5}, 
        {url:"5.webp", id:5}, 
        {url:"engineers_day.webp", id:5},
        {url:"ieee_sps_teamm.webp", id:5}
      ]
    return (
        <>
            <div className="app-iconsbar">
                <Iconsbar />
            </div>
            <div className="app-testimonial">
                <Testimonial />
            </div>
            <div className="app-footer">
                <Footer />
            </div>
        </>
    )
}

export default Homepage

// http://localhost:8000/pastevents
// npx json-server --watch database_1/pastevents.json --port 8000