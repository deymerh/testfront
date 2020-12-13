import React from 'react'
import './HeaderComponent.css';
//icons
import Logo from '../../assets/logo-davivienda.png';
import BtnClose from '../../assets/icon-close.png';
import Iconmenu from '../../assets/icon-menu.png';

const HeaderComponent = ({ name, title, subTitle }) => {
  return (
    <>
      <header className="Header">
        <figure>
          <img src={Logo} alt={Logo} />
          <img src={BtnClose} alt={BtnClose} />
        </figure>
      </header>
      <nav className="Title">
        <h2>{name || "DEYMER HERNÁNDEZ TORRES"}</h2>
        <div className="Section">
          <figure>
            <img src={Iconmenu} alt={Iconmenu} />
          </figure>
          <div>
            <p className="Section__Title">{title || "Prueba"}</p>
            <p className="SubSection__Title">{subTitle || "Beneficios y Características"}</p>
          </div>
        </div>
      </nav>
    </>
  )
}

export default HeaderComponent
