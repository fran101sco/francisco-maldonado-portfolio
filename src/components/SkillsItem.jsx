import React from 'react'

const SkillsItem = ({img, title, level}) => {
  return (
    <div className='skills-data'>
        <div className="skills-blob">
            <img src={img} alt='' className='skills-img' />

            <h3 className="skills-name">{title}</h3>
            <span className="skills-lavel">{level}</span>
        </div>
       
    </div>
  )
}

export default SkillsItem