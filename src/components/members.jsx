import React from 'react'
import useFetch from "./usefetch";
import Profile_data_list from './profile_data_list';


const Members = () => {

    const {data: event, pending, error} = useFetch('http://localhost:8000/profile')

    return (
        <div className='members' id='members'>
            <div className='pastevents_component'>
                <div className="past-event">
                    {pending && <h2 className='loading'>Loading...</h2>}
                    {error && <div>{error}</div>}
                    {event && <Profile_data_list event={event} title={"Your Information"} parent_width={'1090px'} parent_height={'540px'} />}
                </div>
            </div>
        </div>
    )
}

export default Members


// {
//     "name":"",
//     "post":"",
//     "linki":"",
//     "insta":"",
//     "git":""
// }