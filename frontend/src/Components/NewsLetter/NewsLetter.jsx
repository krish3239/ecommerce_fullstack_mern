import React from 'react'
import './NewLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>GET EXCLUSIVE OFFERS ON YOUR EMAIL</h1>
        <p>Suscribe to our newsletter and stay updated</p>
        <div>
            <input type="email" placeholder='Your email id' />
            <button>Suscribe</button>
        </div>
      
    </div>
  )
}

export default NewsLetter
