import React from 'react'
import { Link } from 'react-router-dom'

const Submitted = () => {
  return (
    <div className='submitted'>
        <div className="submitted-text">
            <span>
                Submitted!
            </span>
            <Link to={'/'} >
                Go to home page...
            </Link>
        </div>
    </div>
  )
}

export default Submitted