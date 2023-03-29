import React from 'react'
import  './day.css'
function Location(props) {
  return (
    <div className=' loc'>
     <p className='mt-2 text-uppercase'>{props.name}</p> 
      
    </div>
  )
}

export default Location
