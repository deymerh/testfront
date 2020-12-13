import React from 'react'
import './BenefitsComponents.css';
const BenefitsComponents = ({ icon, text }) => {
  return (
    <div className="Benefits">
      <figure>
        <img src={icon} alt={icon} />
      </figure>
      <p>{text}</p>
    </div>
  )
}

export default BenefitsComponents
