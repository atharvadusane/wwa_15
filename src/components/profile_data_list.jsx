import React from 'react'

const Profile_data_list = ({event, title, parent_width, parent_height}) => {
  return (
    <div>
        <h1>
            {title}
        </h1>
        <br/>
        <div className="event-list" key={event.id}>
            {
                event.map((eve)=>(
                    <div className="eve-list">
                        <h1>{eve.firstname} {eve.lastname}</h1>
                        <h3>Email Address: {eve.email}</h3>
                        <p> <h3>About Yourself:</h3> <br/> {eve.yourself}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Profile_data_list