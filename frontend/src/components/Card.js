import React from 'react'
import '../styles/Card.css'
import {Link} from 'react-router-dom'
const Card = ({title,body,link}) => {
  return (
    
    <div className='card'>
        {/* <div className='cardImage'>
        <img src={image} alt='placeholder' />
        </div> */}
        <div className='cardContent'>
        <h3>{title}</h3>
        <p>{body}</p>
        <a href={link}>Link</a>
        </div>
    </div>
      
    
  )
}

export default Card
