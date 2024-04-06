import React from 'react'
import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='notfound'>
        <h2>Sorry</h2>
        <p>This Page cannot be found</p>
        <Link to='/'>Back to Home</Link>
      
    </div>
  )
}

export default NotFound
