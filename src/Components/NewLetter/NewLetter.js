import React from 'react'
import './NewLetter.css'
import { MdOutlineEmail } from "react-icons/md";

function NewsLetter() {
  return (
    <div className='newsletter'>
         <p>Subscribe to get information , latest news and other </p>
         <p className='second-paragraph'>intersting offers about Cobham</p>

       <div className="input-section">
          <input type='email' placeholder=' Your email' />
         <button>Subscribe</button>
       </div>
    </div>
  )
}

export default NewsLetter