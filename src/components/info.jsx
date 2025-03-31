import React from 'react'
import { infoPersonal } from '../Data'

const info = () => {
  return (
    <>
        {infoPersonal.map(({title,description}, index)=>{
            return(
                <li className="info-item" key={index}>
                    <span className="info-title">{title}</span>
                    <span className='info-description'>{description}</span>
                </li>
            )
        })}
    </>
  )
}

export default info