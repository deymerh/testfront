import React from 'react';
import './ButtonComponent.css';

const ButtonComponent = ({ onClick }) => {
  return (
    <div className="Container__button">
      <button onClick={onClick} className="Btn__main">
        Continuar
    </button>
    </div>
  )
}

export default ButtonComponent
