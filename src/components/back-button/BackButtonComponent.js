import React from 'react'
import './BackButtonComponent.css';
import Iconback from '../../assets/icon-back.png';

const BackButtonComponent = ({ onClick }) => {
  return (
    <button onClick={onClick} className="Btn__back">
      <figure>
        <img src={Iconback} alt={Iconback} />
      </figure>
      <p>Atras</p>
    </button>
  )
}

export default BackButtonComponent
