import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='footer' id='footer'>
                <div className="ieee-info footer-card">
                    <h2>jobs_here.com </h2>
                    {/* <h5>Address:</h5>
            <h6>Sector 26, Pradhikaran,</h6>
            <h6>Nigdi, Pune, 411044</h6>
            <h6>Near Akurdi Railway Station</h6>
            <h5>Contact: </h5>
            <h6>1234567890</h6> */}
                    <p>
                        We at jobs_here are here to helf you get hired to topm MNC companies in accordance to your skills at our best. Connect with us via whatsapp or contact on mail we're always here to help you out! 
                    </p>
                    <div className="mail">

                    </div>
                </div>
                <div className="useful-links-section footer-card">
                    <h4>USEFUL LINKS</h4>
                    <div className="links-div">
                        <ul className="list-unstyled">
                            <li className='useful-links'><a href='/' target='_blank'><span class="material-symbols-outlined">keyboard_double_arrow_right</span>jobs_here.com - Home</a></li>
                            <li className='useful-links'><a href='https://www.linkedin.com/jobs/search/?currentJobId=3727734671&f_C=1035%2C1418841%2C165397%2C1386954%2C3763403%2C3290211%2C10073178%2C3238203%2C2270931%2C3641570%2C263515%2C1148098%2C5097047%2C589037%2C3178875%2C692068%2C164951%2C18086638%2C19537%2C19053704%2C1889423%2C30203%2C11206713%2C2446424&geoId=92000000&origin=COMPANY_PAGE_JOBS_CLUSTER_EXPANSION&originToLandingJobPostings=3727734671%2C3742298403%2C3716916126%2C3739975295%2C3741338682%2C3712100503%2C3732563922%2C3704873960%2C3718291641' target='_blank'><span class="material-symbols-outlined">keyboard_double_arrow_right</span>Microsoft hiring</a></li>
                            <li className='useful-links'><a href='' target='_blank'><span class="material-symbols-outlined">keyboard_double_arrow_right</span>Know</a></li>
                            <li className='useful-links'><a href='https://wa.me/+918793494663' target='_blank'><span class="material-symbols-outlined">keyboard_double_arrow_right</span>WhatsAPP - DM</a></li>
                            <li className='useful-links'><a href='atharvadusane@gmail.com' target='_blank'><span class="material-symbols-outlined">keyboard_double_arrow_right</span>Mail</a></li>
                        </ul>
                    </div>
                </div>
                <div className="contact footer-card">
                    <h4>CONTACT US</h4>
                    <p>
                        Pimpri Chinchwad College of Engineering.
                        Near Akurdi Railway Station Rd, Sector No. 26, Pradhikaran, Nigdi, Pimpri-Chinchwad, Maharashtra 411044
                    </p>
                    <div className="contact-bottom">
                        <iframe className='maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.2732829148936!2d73.75906487508969!3d18.65172878246746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e76c8fa205%3A0x1b210131915734fd!2sPCCOE%20-%20Pimpri%20Chinchwad%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1693304574561!5m2!1sen!2sin" width="170" height="120" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                        <div className="handles">
                            <div className="insta-link social-icon">
                                <a href="https://instagram.com/ieeespspccoe23?igshid=NjIwNzIyMDk2Mg==" target="_blank"><img src="instagram.png" alt="" width="30px"/></a>
                                <i class="fa fa-instagram" aria-hidden="true"/>
                                <a href="https://instagram.com/ieeespspccoe23?igshid=NjIwNzIyMDk2Mg==" target="_blank"><span>Instagram</span></a>
                            </div>
                            <div className="linkedin-link social-icon">
                                <a href="https://www.linkedin.com/company/ieeespspccoe/" target="_blank"><img src="linkedin1.png" alt="" width="30px" /></a>
                                <a href="https://www.linkedin.com/company/ieeespspccoe/" target="_blank"><span>LinkedIn</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div className="afterfooter">
                <span>copyright- jobs_here.com ©</span>
                <small>
                    <a href="https://www.linkedin.com/in/atharva-dusane/"> Meet the developer-s</a>
                </small>
            </div>
        </>
    )
}

export default Footer

/*

names of input field: 
entry.1594124235     not this-> =atharvadusane
entry.1247559388                =atharva
entry.606992000                 =121B1E049

form tag action:
https://docs.google.com/forms/d/e/1FAIpQLSe4V20ZlPD1FOEo71hfC-6MGTrew5cRiML1xfK0fdPJa5uCdQ/formResponse


<div className="insta">
                    <a href="https://instagram.com/ieeespspccoe23?igshid=NjIwNzIyMDk2Mg==" target="_blank"><img src="instaa.png" alt="" width="50px"/></a>
                    <a href="https://instagram.com/ieeespspccoe23?igshid=NjIwNzIyMDk2Mg==" target="_blank"><span>ieeespshandle</span></a>
                </div>
                <div className="linkedin">
                    <a href="https://www.linkedin.com/company/ieeespspccoe/" target="_blank"><img src="linkedin1.png" alt="" width="47nom run devpx"/></a>
                    <a href="https://www.linkedin.com/company/ieeespspccoe/" target="_blank"><span>ieeespshandle</span></a>
</div> 

*/