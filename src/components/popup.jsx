import React from 'react'

// openpup is false, make it true to return null
const Popup = ({openpop, closePopup}) => {
    // console.log(openpop)
    if (openpop) return null
    return (
        <div className='popup'>
            <div className="inner-popup">
                <div className="left-popup">
                    <img src="https://media.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_200_200/0/1618231291419/microsoft_logo?e=1706140800&v=beta&t=oZG2l73quLgTuTCjuf2E7qbtFBc8kRauQlcRGxpatKs" alt="" width='90%'/>
                </div>
                <div className="right-popup">
                    <div className="popup-event-title">
                        <h1><b>Microsoft is hiring!</b></h1>
                    </div>
                    <p className='popup-para'>
                    We are looking for a Software engineer to join the OneNote Web team. The OneNote Web team owns a gamut of areas. We work on AI-assisted contextual capture, recall and organization of notes across PC, Mobile and Web, and embedding those experiences in Microsoft 365 hubs to solve the basic human need of remembering. Our problems are spread across the full stack ranging from deep fundamental and architectural improvements in Performance, Reliability, Boot and Canvas to building delightful user experiences powered by AI/ML and using the latest technologies. We work at a massive scale, and use the best-in-class infrastructure that boosts developer productivity & engineering velocity.
                    </p>
                    <a href="https://www.linkedin.com/jobs/search/?currentJobId=3727734671&f_C=1035%2C1418841%2C165397%2C1386954%2C3763403%2C3290211%2C10073178%2C3238203%2C2270931%2C3641570%2C263515%2C1148098%2C5097047%2C589037%2C3178875%2C692068%2C164951%2C18086638%2C19537%2C19053704%2C1889423%2C30203%2C11206713%2C2446424&geoId=92000000&origin=COMPANY_PAGE_JOBS_CLUSTER_EXPANSION&originToLandingJobPostings=3727734671%2C3742298403%2C3716916126%2C3739975295%2C3741338682%2C3712100503%2C3732563922%2C3704873960%2C3718291641" target='_blank'>
                        <button>
                            Register here
                        </button>
                    </a>
                </div>
                <div className="close-popup">
                    <button onClick={closePopup}>
                        <img src="closeBtn.svg" alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Popup