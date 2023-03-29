import React from 'react'
import './day.css'
import clouds from './img/cloudy.png';


export default function Outside(props) {
  return (
    <div className='my-4 p-2 py-4 hum text-center '>

{<img className='img center mb-3 ' src={clouds} alt="Clouds" />}
    <p className="text-center aro text-uppercase">{props.around}</p>
           <p className=''> {props.feels}</p>
           <p>{props.out}</p>
           <p>{props.humul}</p>
    </div>
  )
}
