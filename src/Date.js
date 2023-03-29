import React from 'react'

function Date() {
    const current = new Date();
   
  const date = `${current.getDate()}/${current.getMonth()+1} `;
  
  
  return (
    <div>
      {date}
      
        </div>
  )
}

export default Date
