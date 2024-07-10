import React from 'react'
import './SkillCard.Module.css'

export const SkillCard = ({ title, iconUrl, isActive, OnClick }) => {
  return (
    <div className={`skills-card ${isActive ? "active" : ""}`} onClick={() => OnClick()}>
      <div className='skills-icons'>
        <img src={iconUrl} alt={title} />
      </div>
      <span>{title}</span>
    </div>
  )
}
